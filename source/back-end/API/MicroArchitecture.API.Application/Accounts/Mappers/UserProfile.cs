using MicroArchitecture.API.Application.Accounts.Models;
using MicroArchitecture.API.Domain.Accounts;
using System.Linq;
using ProfileMapper = AutoMapper.Profile;

namespace MicroArchitecture.API.Application.Accounts.Mappers
{
    public class UserProfile : ProfileMapper
    {
        public UserProfile()
        {
            CreateMap<Address, AddressDto>();
            CreateMap<Profile, ProfileDto>();

            CreateMap<Account, UserDetailDto>()
                .ForMember(destination => destination.Roles,
                    options => options.MapFrom(source => source.Roles.Select(x => x.RoleId)))
                .AfterMap((src, dest, context) =>
                {
                    dest.Profile = context.Mapper.Map<ProfileDto>(src.Profile);
                    dest.Address = context.Mapper.Map<AddressDto>(src.Address);
                });
        }
    }
}
