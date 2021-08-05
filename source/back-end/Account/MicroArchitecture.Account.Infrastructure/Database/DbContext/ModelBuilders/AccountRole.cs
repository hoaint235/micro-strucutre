using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.ModelBuilders
{
    public class AccountRole : BaseEntity<Domain.Accounts.AccountRole>
    {
        public override void ConfigureOtherProperties(EntityTypeBuilder<Domain.Accounts.AccountRole> builder)
        {
            builder.ToTable("account_role").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.RoleId).HasColumnName("role_id");
            builder.Property(x => x.UserId).HasColumnName("account_id");
        }
    }
}
