/* eslint-disable prettier/prettier */
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { memories } from "./memories.schema";
import { users } from "./users.schema";

export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id),
    memoryId: integer('memory_id').notNull().references(() => memories.id),
    content: text('content').notNull(),
    createdAt: text('created_at').notNull(),
    updatedAt: text('updated_at').notNull()
});
