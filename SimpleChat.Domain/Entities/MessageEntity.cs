using System;
using System.Collections.Generic;

namespace SimpleChat.Domain.Entities
{
    public class MessageEntity
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public long ChannelId { get; set; }
        public ChannelEntity ChannelEntity { get; set; }
        public long SentBy { get; set; }
        public UserEntity SentByEntity { get; set; }
        public DateTime CreatedOn { get; set; }
        public ICollection<MessageLogEntity> MessageLogs { get; set; }
    }
}
