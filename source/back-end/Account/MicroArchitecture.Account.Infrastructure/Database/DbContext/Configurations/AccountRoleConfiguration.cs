using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using MicroArchitecture.Account.Domain.Accounts;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.Configurations
{
    public class AccountRoleConfiguration : BaseEntityConfiguration<AccountRole>
    {
        public override void ConfigureOtherProperties(EntityTypeBuilder<AccountRole> builder)
        {
            builder.ToTable("account_role").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.RoleId).HasColumnName("role_id");
            builder.Property(x => x.UserId).HasColumnName("account_id");
        }
    }
}
