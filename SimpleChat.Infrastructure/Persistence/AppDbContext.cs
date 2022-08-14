using Microsoft.EntityFrameworkCore;
using SimpleChat.Application.Base;
using SimpleChat.Domain.Entities;

namespace SimpleChat.Infrastructure.Persistence
{
    public class AppDbContext : DbContext, IAppDbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<UserEntity> UserEntities { get; set; }
        public DbSet<ChannelEntity> ChannelEntities { get; set; }
        public DbSet<ChannelParticipantEntity> ChannelParticipantEntities { get; set; }
        public DbSet<MessageEntity> MessageEntities { get; set; }
        public DbSet<MessageLogEntity> MessageLogEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ChannelEntity>(typeBuilder =>
            {
                typeBuilder.HasKey(x => x.Guid);
                typeBuilder
                    .HasOne(p => p.CreatedByEntity)
                    .WithMany(b => b.Channels)
                    .HasForeignKey(p => p.CreatedBy);
            });

            builder.Entity<ChannelParticipantEntity>(typeBuilder =>
            {
                typeBuilder.HasKey(table => new
                {
                    table.ChannelId, table.UserId
                });
            });
        }
    }
}