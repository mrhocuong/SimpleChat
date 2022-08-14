using System;
using System.ComponentModel.DataAnnotations;

namespace SimpleChat.Domain.Entities
{
    public class MessageLogEntity
    {
        [Key] public Guid Guid { get; set; }
        public Guid MessageId { get; set; }
        public long ReadeBy { get; set; }
        public DateTime ReadAt { get; set; }
        public MessageEntity? MessageEntity { get; set; }
        public UserEntity? UserEntity { get; set; }
    }
}
