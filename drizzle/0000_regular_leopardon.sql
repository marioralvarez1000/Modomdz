CREATE TABLE `analytics_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`visitor_id` text NOT NULL,
	`session_id` text NOT NULL,
	`event_name` text NOT NULL,
	`path` text NOT NULL,
	`content_slug` text,
	`category` text,
	`zone` text,
	`value` text,
	`referrer_host` text,
	`utm_source` text,
	`utm_medium` text,
	`utm_campaign` text,
	`device_type` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `analytics_created_idx` ON `analytics_events` (`created_at`);--> statement-breakpoint
CREATE INDEX `analytics_event_created_idx` ON `analytics_events` (`event_name`,`created_at`);--> statement-breakpoint
CREATE INDEX `analytics_path_created_idx` ON `analytics_events` (`path`,`created_at`);--> statement-breakpoint
CREATE INDEX `analytics_session_idx` ON `analytics_events` (`session_id`);--> statement-breakpoint
CREATE TABLE `newsletter_subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`source` text DEFAULT 'website' NOT NULL,
	`consented_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `newsletter_email_unique` ON `newsletter_subscribers` (`email`);--> statement-breakpoint
CREATE TABLE `sponsor_leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`business` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`category` text,
	`message` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `sponsor_created_idx` ON `sponsor_leads` (`created_at`);