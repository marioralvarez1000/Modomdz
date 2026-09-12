import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const analyticsEvents = sqliteTable("analytics_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  visitorId: text("visitor_id").notNull(),
  sessionId: text("session_id").notNull(),
  eventName: text("event_name").notNull(),
  path: text("path").notNull(),
  contentSlug: text("content_slug"),
  category: text("category"),
  zone: text("zone"),
  value: text("value"),
  referrerHost: text("referrer_host"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  deviceType: text("device_type"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("analytics_created_idx").on(table.createdAt),
  index("analytics_event_created_idx").on(table.eventName, table.createdAt),
  index("analytics_path_created_idx").on(table.path, table.createdAt),
  index("analytics_session_idx").on(table.sessionId),
]);

export const newsletterSubscribers = sqliteTable("newsletter_subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  status: text("status").notNull().default("active"),
  source: text("source").notNull().default("website"),
  consentedAt: text("consented_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("newsletter_email_unique").on(table.email)]);

export const sponsorLeads = sqliteTable("sponsor_leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  business: text("business").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  category: text("category"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  consentedAt: text("consented_at"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("sponsor_created_idx").on(table.createdAt)]);

export const eventSubmissions = sqliteTable("event_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventName: text("event_name").notNull(),
  organizer: text("organizer").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  eventDate: text("event_date").notNull(),
  venue: text("venue").notNull(),
  cost: text("cost"),
  sourceUrl: text("source_url"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  consentedAt: text("consented_at"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("event_submissions_created_idx").on(table.createdAt)]);

export const userProfiles = sqliteTable("user_profiles", {
  userId: text("user_id").primaryKey(),
  email: text("email").notNull(),
  displayName: text("display_name"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  consentedAt: text("consented_at"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("user_profiles_email_unique").on(table.email)]);

export const savedPlaces = sqliteTable("saved_places", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  slug: text("slug").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("saved_places_user_slug_unique").on(table.userId, table.slug),
  index("saved_places_user_created_idx").on(table.userId, table.createdAt),
]);

export const userActivity = sqliteTable("user_activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  eventName: text("event_name").notNull(),
  contentSlug: text("content_slug"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("user_activity_user_created_idx").on(table.userId, table.createdAt),
]);
