using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Users.IntegrationEvents;

namespace MicroArchitecture.Account.Domain.Users
{
  public class User : Entity, IAudit, IAggregateRoot
  {
    public UserProfile Profile { get; private set; }
    public bool IsActivate { get; private set; }
    public UseStatus Status { get; private set; }
    public ICollection<UserRole> Roles { get; private set; }
    public Guid? CreatedBy { get; set; }
    public Guid? UpdatedBy { get; set; }
    public DateTime? CreatedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
    public bool IsDeleted { get; set; }
    public string ExternalId { get; private set; }

    private User() { }

    private User(UserProfile profile, UseStatus status)
    {
      Profile = profile;
      Status = status;
      ExternalId = Guid.NewGuid().ToString();
    }

    public static User Create(string email, string phoneNumber, List<Guid> roleIds)
    {
      var profile = UserProfile.Create(email, phoneNumber);
      var user = new User(profile, UseStatus.ForceChangePassword);
      user.Roles = UserRole.Create(user.Id, roleIds);
      user.IsActivate = true;

      AddIntegrationEvent(new UserCreatedEvent
      {
        UserId = user.ExternalId,
        Email = email,
        PhoneNumber = phoneNumber
      });

      return user;
    }

    public void Activate()
    {
      IsActivate = true;
      AddIntegrationEvent(new ActivateUserEvent
      {
        UserName = Profile.Email
      });
    }

    public void Deactivate()
    {
      IsActivate = false;
      AddIntegrationEvent(new DeactivateUserEvent
      {
        UserName = Profile.Email
      });
    }

    public void UpdateExternalId(string id)
    {
      ExternalId = id;
    }
  }
}
