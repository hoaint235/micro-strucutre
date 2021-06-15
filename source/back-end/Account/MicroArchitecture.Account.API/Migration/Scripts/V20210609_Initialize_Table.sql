USE MRA_Account
GO

CREATE TABLE [dbo].[User] (
  Id UNIQUEIDENTIFIER PRIMARY KEY,
  ExternalId VARCHAR(50),
  Email NVARCHAR(100),
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  Status INT NOT NULL,
  IsActivate BIT DEFAULT 0,
  Address NVARCHAR(200) NULL,
  PhoneNumber VARCHAR(15) NULL,
  CreatedBy UNIQUEIDENTIFIER,
  CreatedDate DATETIME NOT NULL,
  UpdatedBy UNIQUEIDENTIFIER NULL,
  UpdatedDate DATETIME NULL,
  IsDeleted BIT DEFAULT 0
)
GO

CREATE TABLE [dbo].[UserRole] (
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	UserId UNIQUEIDENTIFIER NOT NULL,
	RoleId UNIQUEIDENTIFIER NOT NULL,
	CreatedBy UNIQUEIDENTIFIER,
	CreatedDate DATETIME,
	UpdatedBy UNIQUEIDENTIFIER NULL,
	UpdatedDate DATETIME NULL,
	IsDeleted BIT DEFAULT 0,
)
GO

CREATE TABLE [dbo].[UserHistory] (
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	UserId UNIQUEIDENTIFIER,
	CreatedDate DATETIME,
	Device NVARCHAR(200),
	MoreInfo NVARCHAR(200)
)
GO

INSERT INTO [dbo].[User](Id, ExternalId, Email, Status, IsActivate, CreatedBy, CreatedDate)
VALUES 
(NEWID(), 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16', 'hoai.nt235@gmail.com', 2, 1, NEWID(), GETUTCDATE())
GO

DECLARE @DefaultRoleCreatedBy UNIQUEIDENTIFIER;
SET @DefaultRoleCreatedBy = (SELECT u.CreatedBy FROM [dbo].[User] u WHERE u.ExternalId = 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16') 
DECLARE @DefaultUserId UNIQUEIDENTIFIER;
SET @DefaultUserId = (SELECT u.Id FROM [dbo].[User] u WHERE u.ExternalId = 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16') 

INSERT INTO [dbo].[UserRole](Id, UserId, RoleId, CreatedBy, CreatedDate)
VALUES 
(NEWID(), @DefaultUserId, '3382AD33-A03E-4126-8648-367C7E75BC0B', @DefaultRoleCreatedBy, GETUTCDATE()),
(NEWID(), @DefaultUserId, 'F125EFB3-CA2C-4589-A46D-7201DA35C0D6', @DefaultRoleCreatedBy, GETUTCDATE()),
(NEWID(), @DefaultUserId, 'E95439AD-54DF-4407-92DF-E0135D925400', @DefaultRoleCreatedBy, GETUTCDATE())
GO