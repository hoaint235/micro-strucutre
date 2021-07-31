SET client_encoding = 'UTF8';

CREATE TABLE IF NOT EXISTS "account" (
    "id" UUID NOT NULL,
	"external_id" CHARACTER VARYING(50),
    "email" CHARACTER VARYING(100) NOT NULL,
	"first_name" CHARACTER VARYING(50) NOT NULL,
	"last_name" CHARACTER VARYING(50) NOT NULL,
	"status" SMALLINT NOT NULL,
	"is_active" BOOLEAN NOT NULL,
	"house_number" CHARACTER VARYING(100),
	"district" CHARACTER VARYING(100),
	"city" CHARACTER VARYING(100),
	"country_code" CHARACTER VARYING(10) NOT NULL,
	"phone_number" CHARACTER VARYING(15) NOT NULL,
	"created_by" UUID NOT NULL,
	"created_date" TIMESTAMP(6) NOT NULL DEFAULT timezone('utc', NOW()),
	"updated_by" UUID,
	"updated_date" TIMESTAMP(6) DEFAULT timezone('utc', NOW()),	
	"is_deleted" BOOLEAN,
	
	CONSTRAINT cc_client_email UNIQUE ("email"),
	CONSTRAINT pk_client_id PRIMARY KEY ("id")
);	