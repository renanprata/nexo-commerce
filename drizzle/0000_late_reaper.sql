CREATE TABLE `carts` (
	`owner` text NOT NULL,
	`product` text NOT NULL,
	`quantity` integer NOT NULL,
	PRIMARY KEY(`owner`, `product`)
);
--> statement-breakpoint
CREATE TABLE `favorites` (
	`owner` text NOT NULL,
	`product` text NOT NULL,
	PRIMARY KEY(`owner`, `product`)
);
--> statement-breakpoint
CREATE TABLE `order_items` (
	`order_id` text NOT NULL,
	`product` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer NOT NULL,
	`price` integer NOT NULL,
	PRIMARY KEY(`order_id`, `product`),
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`created` text NOT NULL,
	`status` text NOT NULL,
	`total` integer NOT NULL,
	`data` text NOT NULL,
	`request_key` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `orders_request_key_unique` ON `orders` (`request_key`);--> statement-breakpoint
CREATE INDEX `idx_orders_owner_created` ON `orders` (`owner`,`created`);--> statement-breakpoint
CREATE TABLE `product_overrides` (
	`product` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`owner` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL
);
