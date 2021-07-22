using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Users;
using System.Linq;
using ProfileMapper = AutoMapper.Profile;

namespace MicroArchitecture.Account.Application.User.Mappers
{
    public class UserProfile : ProfileMapper
    {
        public UserProfile()
        {
            CreateMap<Address, AddressDto>();
            CreateMap<Profile, ProfileDto>();

            CreateMap<Domain.Users.User, UserDetailDto>()
                .ForMember(destination => destination.Roles,
                    options => options.MapFrom(source => source.Roles.Select(x => x.Id)))
                .AfterMap((src, dest, context) =>
                {
                    dest.Profile = context.Mapper.Map<ProfileDto>(src.Profile);
                    dest.Address = context.Mapper.Map<AddressDto> (src.Address);
                });
        }
    }
}
