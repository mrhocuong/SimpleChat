using System;

namespace SimpleChat.Domain.Entities
{
    public class MessageLogEntity
    {
        public long Id { get; set; }
        public long MessageId { get; set; }
        public long ReadeBy { get; set; }
        public DateTime ReadAt { get; set; }
        public MessageEntity MessageEntity { get; set; }
        public UserEntity UserEntity { get; set; }
    }
}
