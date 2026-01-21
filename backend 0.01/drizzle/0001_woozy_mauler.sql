ALTER TABLE "Account" DROP CONSTRAINT "Account_provider_providerAccountId_pk";--> statement-breakpoint
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_identifier_token_pk";--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'Session'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "Session" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "Account" ADD COLUMN "id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "Session" ADD COLUMN "id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "WaitlistEntry" ADD COLUMN "userId" text;--> statement-breakpoint
ALTER TABLE "WaitlistEntry" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "WaitlistEntry" ADD CONSTRAINT "WaitlistEntry_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Account" ADD CONSTRAINT "Account_provider_providerAccountId_unique" UNIQUE("provider","providerAccountId");--> statement-breakpoint
ALTER TABLE "Session" ADD CONSTRAINT "Session_sessionToken_unique" UNIQUE("sessionToken");--> statement-breakpoint
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_token_unique" UNIQUE("token");--> statement-breakpoint
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_identifier_token_unique" UNIQUE("identifier","token");