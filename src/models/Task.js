// Modules
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid")

const p = path.join(path.dirname(require.main.filename), 'data', 'tasks.json');

module.exports = class Task {
  constructor(data) {
    const {description } = data;
    this.id = uuidv4();
    this.description = description;
  }

  
  save() {
    fs.readFile(p, (err, data) => {
      let tasks = [];
      if (!err) {
        tasks = JSON.parse(data);
      }
      tasks.push(this);
      fs.writeFile(p, JSON.stringify(tasks), (err) => console.log(err));
    })
  }

  static update(tasks) {
    fs.writeFile(p, JSON.stringify(tasks), (err) => console.log(err));
  }

  static getAll(cb) {
    fs.readFile(p, (err, data) => {
      let tasks = [];
      if (!err) {
        tasks = JSON.parse(data);
      }
      cb(tasks);
    });
  }
};
