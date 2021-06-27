using AutoMapper;
using MicroArchitecture.Account.Application.User.Models;
using System.Linq;

namespace MicroArchitecture.Account.Application.User.Mappers
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<Domain.Users.User, UserDto>()
                .ForMember(destination => destination.Email,
                    options => options.MapFrom(source => source.Profile.Email))
                .ForMember(destination => destination.Roles,
                    options => options.MapFrom(source => source.Roles.Select(x => x.Id)));
        }
    }
}
