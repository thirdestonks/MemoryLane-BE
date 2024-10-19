/* eslint-disable prettier/prettier */
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { users } from './users.schema';

export const memories = pgTable('memories', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id),
    title: text('title').notNull(),
    description: text('description').notNull(),
    file: text('file').notNull(),
    filePath: text('file_path').notNull(),
    createdAt: text('created_at').notNull(),
    updatedAt: text('updated_at').notNull()
});