import { db } from './db.js';

export const getTasks = async () => {
    const tasks = db.get()
    return tasks;
}