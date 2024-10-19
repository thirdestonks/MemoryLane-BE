/* eslint-disable prettier/prettier */
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    role: text('role').notNull().default('user')
});
