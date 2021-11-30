using System.Collections.Generic;

namespace SimpleChat.Domain.Entities
{
    public class ChannelEntity
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public ChannelType ChannelType { get; set; }
        public long CreatedBy { get; set; }
        public UserEntity CreatedByEntity { get; set; }
        public ICollection<MessageEntity> Messages { get; set; }
    }
}
