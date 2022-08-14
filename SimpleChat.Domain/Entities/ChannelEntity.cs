using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimpleChat.Domain.Entities
{
    public class ChannelEntity
    {
        [Key] public Guid Guid { get; set; }
        public string? Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public Guid CreatedBy { get; set; }
        public UserEntity? CreatedByEntity { get; set; }
        public ICollection<MessageEntity>? Messages { get; set; }
    }
}