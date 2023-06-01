import { getTasks } from '../db/index.js';

export const getTasksRoute = {
    method: 'get',
    path: '/tasks',
    handler: async (req, res) => {
        const tasks = await getTasks();
        res.status(200).json(tasks);
    },
}