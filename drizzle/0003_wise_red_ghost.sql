CREATE TABLE `user_activity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`event_name` text NOT NULL,
	`content_slug` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `user_activity_user_created_idx` ON `user_activity` (`user_id`,`created_at`);--> statement-breakpoint
ALTER TABLE `user_profiles` ADD `first_name` text;--> statement-breakpoint
ALTER TABLE `user_profiles` ADD `last_name` text;--> statement-breakpoint
ALTER TABLE `user_profiles` ADD `phone` text;--> statement-breakpoint
ALTER TABLE `user_profiles` ADD `consented_at` text;