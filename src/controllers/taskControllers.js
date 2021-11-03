const { Task } = require('../models');

const getAll = (req, res) => {
  Task.getAll((tasks) => {
    if(tasks.length === 0){
      res.send("There are no task yet");  
    }else{
      res.send(tasks);  
    }
    
  });
};

const createTask = (req, res) => {
  const { body } = req;
  const newTask = new Task(body);
  newTask.save();
  res.send({
    message: 'Task successfully created!!!'
  });
};


const updateTask = (req, res) => {
  const { params: { id }, body } = req;
  Task.getAll((tasks) => {
    const task = tasks.find(ent => ent.id === id);

    if (task) {
      Object.assign(task, body);
      Task.update(tasks);
      res.send({
        message: 'Task successfully updated!!!',
      });
    } else {
      res.status(404).send({
        message: 'Ups!!! Task not found.',
      });
    }
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  Task.getAll((tasks) => {
    const taskIdx = tasks.findIndex(ent => ent.id === id);

    if (taskIdx !== -1) {
      tasks.splice(taskIdx, 1);
      Task.update(tasks);
      res.send({
        message: 'Task successfully deleted!!!',
      });
    } else {
      res.status(404).send({
        message: 'Ups!!! Task not found.',
      });
    }
  });
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
