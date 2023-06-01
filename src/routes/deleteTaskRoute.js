import { deleteTask, getTasks } from '../db/index.js';

export const deleteTaskRoute = {
    method: 'delete',
    path: '/tasks/:name',
    handler: async (req, res) => {
        const { name } = req.params;
        await deleteTask(name);
        const updatedTasks = await getTasks();
        res.status(200).json(updatedTasks);
    },
}