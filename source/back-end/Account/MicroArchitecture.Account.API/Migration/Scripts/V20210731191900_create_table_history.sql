SET client_encoding = 'UTF8';

CREATE TABLE IF NOT EXISTS "history" (
    "id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
	"created_date" TIMESTAMP(6) NOT NULL DEFAULT timezone('utc', NOW()),
	"device" CHARACTER VARYING(100),
	"more_info" CHARACTER VARYING(200),
	
	CONSTRAINT fk_history_account_id FOREIGN KEY ("account_id") REFERENCES "account"("id"),
	CONSTRAINT pk_history_id PRIMARY KEY ("id")
);