using Microsoft.EntityFrameworkCore;
using SimpleChat.Domain.Entities;

namespace SimpleChat.Application.Base
{
    public interface IAppDbContext
    {
        DbSet<UserEntity> User { get; set; }
        DbSet<ChannelEntity> ChannelEntities { get; set; }
        DbSet<ChannelParticipantEntity> ChannelParticipant { get; set; }
        DbSet<MessageEntity> MessageEntities { get; set; }
        DbSet<MessageLogEntity> MessageLogEntities { get; set; }
    }
}
