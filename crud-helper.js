require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo')

let title, completed, todo, todos;