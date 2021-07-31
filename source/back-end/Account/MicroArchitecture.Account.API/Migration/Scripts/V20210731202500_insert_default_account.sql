SET client_encoding = 'UTF8';

INSERT INTO account(id, 
					external_id, 
					first_name,
					last_name,
					country_code,
					phone_number,
					email, 
					status,
					is_active, 
					created_by, 
					created_date,
					is_deleted)
VALUES 
('c8b90364-7f50-4599-be98-77555bb2c252', 
 'a86efa03-1b00-41bb-b4c2-5402fcd2fa16', 
 'hoai',
 'nguyen',
 '+84',
 '866975603',
 'hoai.nt235@gmail.com', 
 2, 
 true, 
 '95644b8e-78d9-4ef3-a712-6d1ffa5401b9', 
 TIMEZONE('utc', NOW()),
 false);

INSERT INTO account_role (id, 
						  account_id, 
						  role_id, 
						  created_by, 
						  created_date)
VALUES 
('5aaf3d08-52eb-4487-8d47-4353b37e0c93', 'c8b90364-7f50-4599-be98-77555bb2c252', '3382AD33-A03E-4126-8648-367C7E75BC0B', '95644b8e-78d9-4ef3-a712-6d1ffa5401b9',  TIMEZONE('utc', NOW())),
('87a41991-da1b-48a8-aa57-b3183903ddfa', 'c8b90364-7f50-4599-be98-77555bb2c252', 'F125EFB3-CA2C-4589-A46D-7201DA35C0D6', '95644b8e-78d9-4ef3-a712-6d1ffa5401b9',  TIMEZONE('utc', NOW())),
('1fc001bf-e435-41ef-8e53-326254658c7c', 'c8b90364-7f50-4599-be98-77555bb2c252', 'E95439AD-54DF-4407-92DF-E0135D925400', '95644b8e-78d9-4ef3-a712-6d1ffa5401b9',  TIMEZONE('utc', NOW()));
