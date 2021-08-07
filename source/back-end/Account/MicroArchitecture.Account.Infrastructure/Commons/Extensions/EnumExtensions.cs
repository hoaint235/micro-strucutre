using System;

namespace MicroArchitecture.Account.Infrastructure.Commons.Extensions
{
    public static class EnumExtensions
    {
        public static TEnum To<TEnum>(this Enum input) where TEnum : struct
        {
            return Enum.Parse<TEnum>(input.ToString());
        }

        public static TEnum To<TEnum>(this string value)
{
            return (TEnum)Enum.Parse(typeof(TEnum), value, true);
        }
    }
}
