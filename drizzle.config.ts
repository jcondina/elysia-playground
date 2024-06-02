import type { Config } from "drizzle-kit";

export default {
	out: "./drizzle",
	schema: "./src/database/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: "sqlite.db",
	},
} satisfies Config;
