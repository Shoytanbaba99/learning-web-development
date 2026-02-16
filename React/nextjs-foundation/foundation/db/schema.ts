import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users_table", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
});
export const tasks = pgTable("tasks_table", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    status: boolean("status").default(false),
    user_id: integer("user_id")
        .notNull()
        .references(() => users.id),
});

export const usersRelations = relations(users, ({ many }) => ({
    tasks: many(tasks),
}));
export const tasksRelations = relations(tasks, ({ one }) => ({
    user: one(users, {
        fields: [tasks.user_id],
        references: [users.id],
    }),
}));
