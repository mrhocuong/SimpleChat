using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using SimpleChat.Application.Base;

namespace SimpleChat.Infrastructure
{
    public class SignalRConnectionTrackingService : ISignalRConnectionTrackingService
    {
        private static readonly ConcurrentDictionary<string, List<SignalRConnectionModel>> Connections = new();

        public void Add(string hub, string userId, string connectionId)
        {
            var key = GetTrackingKey(hub, userId);
            var signalRConnection = new SignalRConnectionModel
            {
                Hub = hub,
                UserId = userId,
                ConnectionId = connectionId
            };

            Connections.AddOrUpdate(key,
                new List<SignalRConnectionModel> { signalRConnection },
                (_, l) =>
                {
                    l.Add(signalRConnection);
                    return l;
                });
        }

        public void Remove(string hub, string userId, string connectionId)
        {
            var key = GetTrackingKey(hub, userId);
            if (!Connections.TryGetValue(key, out var retrievedValue)) return;
            var lastedUserConnections = retrievedValue.Where(x => x.ConnectionId != connectionId).ToList();
            Connections.TryUpdate(key, lastedUserConnections, retrievedValue);
        }

        private static string GetTrackingKey(string hub, string userId)
        {
            return $"{hub}_{userId}";
        }

        public IEnumerable<SignalRConnectionModel>? GetUserConnections(string hub, string userId)
        {
            var key = GetTrackingKey(hub, userId);
            Connections.TryGetValue(key, out var connections);
            return connections;
        }
    }
}