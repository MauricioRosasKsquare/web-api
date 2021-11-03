// Modules
const express = require('express');
const TaskResources = express.Router();

// Controllers
const { TaskControllers } = require('../controllers');

// Middlewares

const { Middlewares } = require('../middlewares');

// All book resources
TaskResources.get('/', TaskControllers.getAll);
TaskResources.post('/', Middlewares.noEmpty, Middlewares.duplicated, TaskControllers.createTask);
TaskResources.put('/:id', Middlewares.noEmpty, Middlewares.duplicated, TaskControllers.updateTask);
TaskResources.delete('/:id', TaskControllers.deleteTask);

module.exports = TaskResources;


