import { mysqlTable, int, varchar, date } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import * as t from './schema.js';

export const projects = mysqlTable('projects', {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 100 }).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  description: varchar({ length: 255 }),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  projectMembers: many(t.projectMembers, {
    fields: [projects.id],
    references: [t.projectMembers.projectId],
  }),
}));
