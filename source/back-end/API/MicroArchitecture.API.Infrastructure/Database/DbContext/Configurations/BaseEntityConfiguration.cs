using MicroArchitecture.API.Domain.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Configurations
{
    public abstract class BaseEntityConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : class, IAudit
    {
        public void Configure(EntityTypeBuilder<TEntity> builder)
        {
            builder.Property(x => x.CreatedBy).HasColumnName("created_by");
            builder.Property(x => x.CreatedDate).HasColumnName("created_date");
            builder.Property(x => x.UpdatedBy).HasColumnName("updated_by");
            builder.Property(x => x.UpdatedDate).HasColumnName("updated_date");
            builder.Property(x => x.IsDeleted).HasColumnName("is_deleted");

            ConfigureOtherProperties(builder);
        }

        public abstract void ConfigureOtherProperties(EntityTypeBuilder<TEntity> builder);
    }
}
