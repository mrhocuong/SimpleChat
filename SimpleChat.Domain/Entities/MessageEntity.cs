using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimpleChat.Domain.Entities
{
    public class MessageEntity
    {
        [Key] public Guid Guid { get; set; }
        public string? Message { get; set; }
        public Guid ChannelId { get; set; }
        public ChannelEntity? ChannelEntity { get; set; }
        public Guid SentBy { get; set; }
        public UserEntity? SentByEntity { get; set; }
        public DateTime CreatedOn { get; set; }
        public ICollection<MessageLogEntity>? MessageLogs { get; set; }
    }
}