import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

// TABLE: --------- NOTES ----------
export const notes = sqliteTable("notes", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	content: text("content"),
	createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
	updateAt: integer("updated_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});
export type Note = typeof notes.$inferSelect;
export type InsertNote = typeof notes.$inferInsert;
