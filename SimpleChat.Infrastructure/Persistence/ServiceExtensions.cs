using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SimpleChat.Application.Base;

namespace SimpleChat.Infrastructure.Persistence
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("SimpleChat"),
                        b => b.MigrationsAssembly("SimpleChat")),
                ServiceLifetime.Transient);

            services.AddScoped<IAppDbContext>(provider => provider.GetService<AppDbContext>() ?? throw new
                InvalidOperationException());
            return services;
        }
    }
}