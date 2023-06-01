import { db } from './db.js';

export const deleteTask = async (taskName) => {
    await db.delete({ name: taskName });
}