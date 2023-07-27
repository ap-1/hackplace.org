import { sql, type InferModel } from "drizzle-orm";
import { sqliteTable, text, blob } from "drizzle-orm/sqlite-core";

import { type FormInput } from "@/app/onboarding/form";

export const users = sqliteTable("users", {
	id: text("id").primaryKey(),
	onboardedAt: text("onboarded_at").default(sql`CURRENT_TIMESTAMP`),
	responses: blob("responses", { mode: "json" }).$type<FormInput>().notNull(),
});

export type NewUser = InferModel<typeof users, "insert">;
