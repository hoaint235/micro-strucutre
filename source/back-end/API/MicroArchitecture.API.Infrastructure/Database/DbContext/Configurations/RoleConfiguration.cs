using MicroArchitecture.API.Domain.Roles;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Configurations
{
    public class RoleConfiguration : BaseEntityConfiguration<Role>
    {
        public override void ConfigureOtherProperties(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("role").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.Name).HasColumnName("name");
            builder.Property(x => x.Type).HasColumnName("type");
        }
    }
}
