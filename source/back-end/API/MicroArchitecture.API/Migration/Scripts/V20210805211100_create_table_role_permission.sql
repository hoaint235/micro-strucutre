CREATE TABLE IF NOT EXISTS "role_permission" (
	id UUID PRIMARY KEY,
	role_id UUID NOT NULL,
	permission_id UUID NOT NULL,
	is_active BOOLEAN,
	
	CONSTRAINT fk_role_permission_role_id FOREIGN KEY ("role_id") REFERENCES "role"("id"),
	CONSTRAINT fk_role_permission_permission_id FOREIGN KEY ("permission_id") REFERENCES "permission"("id")
)