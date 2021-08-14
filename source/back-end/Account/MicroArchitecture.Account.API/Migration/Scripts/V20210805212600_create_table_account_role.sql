SET client_encoding = 'UTF8';

CREATE TABLE IF NOT EXISTS "account_role" (
    "id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
	"role_id" UUID NOT NULL,
	"created_by" UUID NOT NULL,
	"created_date" TIMESTAMP(6) NOT NULL DEFAULT timezone('utc', NOW()),
	"updated_by" UUID,
	"updated_date" TIMESTAMP(6) DEFAULT timezone('utc', NOW()),	
	"is_deleted" BOOLEAN,
	
	CONSTRAINT fk_account_role_account_id FOREIGN KEY ("account_id") REFERENCES "account"("id"),
	CONSTRAINT fk_account_role_role_id FOREIGN KEY ("role_id") REFERENCES "role"("id"),
	CONSTRAINT pk_account_role_id PRIMARY KEY ("id")
);