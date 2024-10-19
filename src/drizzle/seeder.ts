/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import 'dotenv/config';
import { faker } from '@faker-js/faker';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle (pool, { schema }) as NodePgDatabase<typeof schema>;

async function main() {
    const userIds = await Promise.all(
        Array(10).fill("").map(async () => {
            const user = await db.insert(schema.users).values({
                email: faker.internet.email(),
                name: faker.person.fullName(),
                password: ""
            })
                .returning();
            return user[0].id;
        }),
    );

}

main()
    .then(async () => {
        await pool.end();
        console.log("seeded successfully");
    }).catch(async (e) => {
        await pool.end();
        console.error(e);
    })