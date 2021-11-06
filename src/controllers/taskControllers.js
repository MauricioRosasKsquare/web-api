const  Task  = require('../models/Task');

const getAll = (req, res) => {
  Task.find({}, (error, tasks) => {
    if (error){
      return res.status(500).json({
        message: 'Error getting tasks'
      })
    }
    if(tasks.length === 0){
      return res.status(200).send("There are no tasks yet")
    }
    return res.status(200).json(tasks)
  })
};

const createTask = (req, res) => {
  const { body } = req;
  const newTask = new Task(body);
  newTask.save(function(error, newTask){
    if (error){
      return res.status(500).json({
        message: 'Error creating tasks'
      })
    }
  });
  return res.send({
    message: 'Task successfully created!!!'
  });
  
};


const updateTask = (req, res) => {
  const id = req.params.id
  const description = req.body.description
  if(id.length > 24){
    return res.status(500).json({
      message: 'Invalid id'
    })
  }

  Task.findOneAndUpdate( {_id: {$eq : id} },{description: description}, (error, match) => {
    
    if (error){
      return res.status(500).json({
        message: 'Error updating task'
      })
    }
    
    if(match === null){
      return res.status(200).send({
        message: 'Task not found'
      });
    }
    return res.status(201).send({
      message: 'Task successfully Updated!!!'
    });
  })
}


const deleteTask = (req, res) => {
  const { id } = req.params;

  if(id.length > 24){
    return res.status(500).json({
      message: 'Invalid id'
    })
  }
  
  Task.findOneAndRemove( {_id: {$eq : id} }, (error, match) => {
    if (error){
      return res.status(500).json({
        message: 'Error deleting tasks'
      })
    }
    
    if(match === null){
      return res.status(200).send({
        message: 'Task not found'
      });
    }
    return res.status(201).send({
      message: 'Task successfully deleted'
    });
  })
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
