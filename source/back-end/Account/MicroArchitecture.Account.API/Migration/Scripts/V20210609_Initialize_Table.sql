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

CREATE TABLE [dbo].[Role] (
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	Name VARCHAR(50),
	Description NVARCHAR(50) NULL,
	CreatedBy UNIQUEIDENTIFIER,
	CreatedDate DATETIME,
	UpdatedBy UNIQUEIDENTIFIER NULL,
	UpdatedDate DATETIME NULL,
	IsDeleted BIT DEFAULT 0,
)
GO

CREATE TABLE [dbo].[UserRole] (
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	UserId UNIQUEIDENTIFIER,
	RoleId UNIQUEIDENTIFIER NULL,
	CreatedBy UNIQUEIDENTIFIER,
	CreatedDate DATETIME,
	UpdatedBy UNIQUEIDENTIFIER NULL,
	UpdatedDate DATETIME NULL,
	IsDeleted BIT DEFAULT 0,
)
GO

INSERT INTO [dbo].[Role](Id, Name, Description, CreatedBy, CreatedDate)
VALUES (
	NEWID(),
	'master',
	'Role Master',
	'48292819-447c-41dd-9b65-894d642b732c',
	GETUTCDATE()
)
GO

INSERT INTO [dbo].[User](Id, ExternalId, Email, Status, IsActivate, CreatedBy, CreatedDate)
VALUES (
	NEWID(),
	'a86efa03-1b00-41bb-b4c2-5402fcd2fa16',
	'hoai.nt235@gmail.com',
	2,
	1,
	NEWID(),
	GETUTCDATE()
)
GO

DECLARE @DefaultRoleCreatedBy UNIQUEIDENTIFIER;
SET @DefaultRoleCreatedBy = (SELECT u.CreatedBy FROM [dbo].[User] u WHERE u.ExternalId = 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16') 
DECLARE @DefaultUserId UNIQUEIDENTIFIER;
SET @DefaultUserId = (SELECT u.Id FROM [dbo].[User] u WHERE u.ExternalId = 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16') 
DECLARE @DefaultRoleId UNIQUEIDENTIFIER;
SET @DefaultRoleId = (SELECT r.Id FROM [dbo].[Role] r WHERE r.Name = 'master') 

INSERT INTO [dbo].[UserRole](Id, UserId, RoleId, CreatedBy, CreatedDate)
VALUES (
	NEWID(),
	@DefaultUserId,
	@DefaultRoleId,
	@DefaultRoleCreatedBy,
	GETUTCDATE()
)
GO