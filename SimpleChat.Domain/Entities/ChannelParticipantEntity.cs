using System;

namespace SimpleChat.Domain.Entities
{
    public class ChannelParticipantEntity
    {
        public Guid ChannelId { get; set; }
        public Guid UserId { get; set; }
        public ChannelEntity? ChannelEntity { get; set; }
        public UserEntity? UserEntity { get; set; }
    }
}