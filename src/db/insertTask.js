import { db } from './db.js';

export const insertTask = async (task) => {
    await db.insert(task)
}