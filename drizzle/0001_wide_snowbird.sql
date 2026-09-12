CREATE TABLE `event_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_name` text NOT NULL,
	`organizer` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`event_date` text NOT NULL,
	`venue` text NOT NULL,
	`cost` text,
	`source_url` text,
	`message` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `event_submissions_created_idx` ON `event_submissions` (`created_at`);