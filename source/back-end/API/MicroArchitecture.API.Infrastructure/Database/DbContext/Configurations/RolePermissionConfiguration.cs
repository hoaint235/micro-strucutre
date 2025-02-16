﻿using MicroArchitecture.API.Domain.Roles;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Configurations
{
    public class RolePermissionConfiguration : BaseEntityConfiguration<RolePermission>
    {
        public override void ConfigureOtherProperties(EntityTypeBuilder<RolePermission> builder)
        {
            builder.ToTable("role_permission").HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.RoleId).HasColumnName("role_id");
            builder.Property(x => x.PermissionId).HasColumnName("permission_id");
            builder.Property(x => x.IsActive).HasColumnName("is_active");
        }
    }
}
