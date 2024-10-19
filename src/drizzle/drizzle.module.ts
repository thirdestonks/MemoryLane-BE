/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";

export const DRIZZLE = Symbol('drizzle-connection');
//defines a unique symbol for DI (dependency injection)
@Module({
    providers: [
        {
            provide: DRIZZLE, //DRIZZLE is a token used to inject the connection
            inject: [ConfigService], //inject ConfigService from NestJS when needed
            //useFactory is a function that creates the connection
            useFactory: async (configService: ConfigService) => {
                const databaseUrl = configService.get<string>('DATABASE_URL');
                //get the database url from the .env file
                const pool = new Pool({ //create a connection from Postgres DB
                    connectionString: databaseUrl,
                    ssl: false,
                });
                //return a Drizzle connection using the database connection and schema.
                return drizzle(pool, {schema,}) as NodePgDatabase<typeof schema>;
            }
        },
    ],
    exports: [DRIZZLE],
    //make the DRIZZLE connection available to other modules
})
export class DrizzleModule {}
