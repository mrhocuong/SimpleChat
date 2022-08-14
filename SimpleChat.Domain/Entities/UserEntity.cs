using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimpleChat.Domain.Entities
{
    public class UserEntity
    {
        [Key] public Guid Guid { get; set; }
        public string? UserName { get; set; }
        public DateTime RegisterOn { get; set; }
        public ICollection<ChannelEntity>? Channels { get; set; }
        public ICollection<ChannelParticipantEntity>? ChannelParticipants { get; set; }
        public ICollection<MessageEntity>? Messages { get; set; }
        public ICollection<MessageLogEntity>? MessageLogs { get; set; }
    }
}