using Microsoft.AspNetCore.SignalR;
using SimpleChat.Application.Hubs;

namespace SimpleChat.Application.Chat
{
    public interface IChatService
    {
    }

    public class ChatService : IChatService
    {
        private readonly IHubContext<ChatHub> _hubContext;

        public ChatService(IHubContext<ChatHub> hubContext)
        {
            _hubContext = hubContext;
        }
    }
}