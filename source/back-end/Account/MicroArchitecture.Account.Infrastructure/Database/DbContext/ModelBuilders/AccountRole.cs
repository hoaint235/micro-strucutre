using MicroArchitecture.Account.Domain.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.ModelBuilders
{
    public class AccountRole : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.ToTable("account_role").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.RoleId).HasColumnName("role_id");
            builder.Property(x => x.UserId).HasColumnName("account_id");
            builder.Property(x => x.CreatedBy).HasColumnName("created_by");
            builder.Property(x => x.CreatedDate).HasColumnName("created_date");
            builder.Property(x => x.UpdatedBy).HasColumnName("updated_by");
            builder.Property(x => x.UpdatedDate).HasColumnName("updated_date");
            builder.Property(x => x.IsDeleted).HasColumnName("is_deleted");
        }
    }
}
