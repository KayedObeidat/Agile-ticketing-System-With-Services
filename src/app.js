const express = require('express')
require('./dataBase/mongoose')
const User = require('./models/user')
const Project = require('./models/project')
const Task = require('./models/task')
const userRouter = require('./routes/user')
const projectRouter = require('./routes/project')
const taskProject = require('./routes/task')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(userRouter)
app.use(projectRouter)
app.use(taskProject)
app.use(cors())

module.exports = app
