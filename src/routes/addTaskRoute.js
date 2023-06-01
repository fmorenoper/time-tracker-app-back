import { getTasks, insertTask } from '../db/index.js';

export const addTaskRoute = {
    method: 'post',
    path: '/tasks',
    handler: async (req, res) => {
        console.log('addTaskRoute');
        const task = req.body;
        await insertTask(task);
        const updatedTasks = await getTasks();
        res.status(200).json(updatedTasks);
    },
}