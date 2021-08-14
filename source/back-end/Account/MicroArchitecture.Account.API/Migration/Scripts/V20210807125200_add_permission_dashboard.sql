INSERT INTO permission(id, name, lowered_name) 
VALUES 
('45645fb6-05dc-444e-a3bd-e2401ae260de', 'Dashboard-View', 'dashboard-view');

INSERT INTO role_permission(id, role_id, permission_id, is_active)
VALUES 
('db2faf22-47f4-471f-9937-e34812a8793b', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '45645fb6-05dc-444e-a3bd-e2401ae260de', true);