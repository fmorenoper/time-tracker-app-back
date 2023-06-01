import { addTaskRoute } from './addTaskRoute.js';
import { deleteTaskRoute } from './deleteTaskRoute.js';
import { downloadTasksRoute } from './downloadTasksRoute.js';
import { getTasksRoute } from './getTasksRoute.js';

export const routes = [
    addTaskRoute,
    deleteTaskRoute,
    getTasksRoute,
    downloadTasksRoute
];