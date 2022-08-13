using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using SimpleChat.Application.Base;

namespace SimpleChat.Application.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ISignalRConnectionTrackingService _signalRConnectionTrackingService;

        public ChatHub(ISignalRConnectionTrackingService signalRConnectionTrackingService,
            IHttpContextAccessor httpContextAccessor)
        {
            _signalRConnectionTrackingService = signalRConnectionTrackingService;
            _httpContextAccessor = httpContextAccessor;
        }

        public override Task OnConnectedAsync()
        {
            if (_httpContextAccessor.HttpContext == null ||
                !_httpContextAccessor.HttpContext.Request.Query.TryGetValue("access_token",
                    out var userAccessGuid)) return base.OnConnectedAsync();

            if (!string.IsNullOrEmpty(userAccessGuid.First()))
                _signalRConnectionTrackingService.Add("Chat", userAccessGuid.First(), Context.ConnectionId);

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            if (_httpContextAccessor.HttpContext == null ||
                !_httpContextAccessor.HttpContext.Request.Query.TryGetValue("access_token",
                    out var userAccessGuid)) return base.OnConnectedAsync();

            if (!string.IsNullOrEmpty(userAccessGuid.First()))
                _signalRConnectionTrackingService.Remove("Chat", userAccessGuid.First(), Context.ConnectionId);

            return base.OnDisconnectedAsync(exception);
        }
    }
}