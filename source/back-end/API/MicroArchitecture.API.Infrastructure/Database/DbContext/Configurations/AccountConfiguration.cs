using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Configurations
{
    public class AccountConfiguration : BaseEntityConfiguration<Domain.Accounts.Account>
    {
        public override void ConfigureOtherProperties(EntityTypeBuilder<Domain.Accounts.Account> builder)
        {
            builder.ToTable("account").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.ExternalId).HasColumnName("external_id");
            builder.Property(x => x.Status).HasColumnName("status");
            builder.Property(x => x.IsActive).HasColumnName("is_active");
            builder.OwnsOne(o => o.Profile, pro =>
            {
                pro.Property(x => x.Email).HasColumnName("email");
                pro.Property(x => x.PhoneNumber).HasColumnName("phone_number");
                pro.Property(x => x.FirstName).HasColumnName("first_name");
                pro.Property(x => x.LastName).HasColumnName("last_name");
                pro.Property(x => x.CountryCode).HasColumnName("country_code");
            });

            builder.OwnsOne(o => o.Address, pro =>
            {
                pro.Property(x => x.HouseNumber).HasColumnName("house_number");
                pro.Property(x => x.District).HasColumnName("district");
                pro.Property(x => x.City).HasColumnName("city");
            });
        }
    }
}
