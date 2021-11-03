// Modules
const express = require('express');
const router = express.Router();

// Resources
const { TaskResources } = require('../resources');

// All routes
router.use('/todos', TaskResources);

module.exports = router;
