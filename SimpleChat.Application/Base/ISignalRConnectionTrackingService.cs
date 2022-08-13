namespace SimpleChat.Application.Base
{
    public interface ISignalRConnectionTrackingService
    {
        void Add(string hub, string userId, string connectionId);
        void Remove(string hub, string userId, string connectionId);
    }
}