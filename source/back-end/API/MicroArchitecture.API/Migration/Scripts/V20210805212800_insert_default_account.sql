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
('5aaf3d08-52eb-4487-8d47-4353b37e0c93', 'c8b90364-7f50-4599-be98-77555bb2c252', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '95644b8e-78d9-4ef3-a712-6d1ffa5401b9',  TIMEZONE('utc', NOW())),
('192610ad-4d1b-4dec-a43e-0ab94f723867', 'c8b90364-7f50-4599-be98-77555bb2c252', '87927bd4-9167-4b35-8745-0ebf2cbf4f30', '95644b8e-78d9-4ef3-a712-6d1ffa5401b9',  TIMEZONE('utc', NOW()));