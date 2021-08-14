using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Domain.Accounts;
using System.Linq;
using ProfileMapper = AutoMapper.Profile;

namespace MicroArchitecture.Account.Application.Accounts.Mappers
{
    public class UserProfile : ProfileMapper
    {
        public UserProfile()
        {
            CreateMap<Address, AddressDto>();
            CreateMap<Profile, ProfileDto>();

            CreateMap<Domain.Accounts.Account, UserDetailDto>()
                .ForMember(destination => destination.Roles,
                    options => options.MapFrom(source => source.Roles.Select(x => x.RoleId)))
                .AfterMap((src, dest, context) =>
                {
                    dest.Profile = context.Mapper.Map<ProfileDto>(src.Profile);
                    dest.Address = context.Mapper.Map<AddressDto> (src.Address);
                });
        }
    }
}
