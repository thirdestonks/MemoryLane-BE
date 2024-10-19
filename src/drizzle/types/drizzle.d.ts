import * as schema from './schema';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';

// This type defines the Drizzle database with your schema.
export type DrizzleDB = NodePgDatabase<typeof schema>;
