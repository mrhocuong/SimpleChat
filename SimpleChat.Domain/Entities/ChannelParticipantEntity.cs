namespace SimpleChat.Domain.Entities
{
    public class ChannelParticipantEntity
    {
        public long ChannelId { get; set; }
        public long UserId { get; set; }
        public ChannelEntity ChannelEntity { get; set; }
        public UserEntity UserEntity { get; set; }
    }
}
