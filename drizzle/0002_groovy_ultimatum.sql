CREATE TABLE `saved_places` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`slug` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `saved_places_user_slug_unique` ON `saved_places` (`user_id`,`slug`);--> statement-breakpoint
CREATE INDEX `saved_places_user_created_idx` ON `saved_places` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `user_profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`display_name` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_profiles_email_unique` ON `user_profiles` (`email`);--> statement-breakpoint
ALTER TABLE `event_submissions` ADD `consented_at` text;--> statement-breakpoint
ALTER TABLE `sponsor_leads` ADD `consented_at` text;