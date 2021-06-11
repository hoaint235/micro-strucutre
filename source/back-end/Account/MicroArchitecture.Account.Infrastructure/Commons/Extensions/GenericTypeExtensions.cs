using System;
using System.Linq;

namespace MicroArchitecture.Account.Infrastructure.Commons.Extensions
{
    public static class GenericTypeExtensions
    {
        public static string GetGenericTypeName(this Type type)
        {
            var typeName = type.FullName;

            if (!type.IsGenericType)
            {
                return typeName;
            }

            var genericTypes = string.Join(",", type.GetGenericArguments().Select(t => t.FullName).ToArray());
            typeName = $"{type.FullName.Remove(type.FullName.IndexOf('`'))}<{genericTypes}>";

            return typeName;
        }

        public static string GetGenericTypeName(this object @object)
        {
            return @object.GetType().GetGenericTypeName().Replace("Connect.Service.", "");
        }
    }
}
