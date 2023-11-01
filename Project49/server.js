const express = require('express')
const bodyParser = require('body-parser')
const {dbconnect} = require('./utility/dbConnection')
const {todosTask} = require('./modules/todos')
const { disconnect } = require('./utility/disConnection')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.get('/getAllTasks',async(req,res)=>{
    dbconnect()
    let tasks = await todosTask.find({}).select(["todo","complete"]).sort({createdAt:1})
    res.send(tasks)
})
app.post('/setTask',(req,res)=>{
    const {task} = req.body
    dbconnect()
    const todo = new todosTask({todo: task})
    try {
        todo.save()
        res.send('Task added')
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})
app.post('/updateComplete',async(req,res)=>{
    const {todo,complete} = req.body
    dbconnect()
    await todosTask.findOneAndUpdate({todo: todo},{complete:complete})
})
app.post('/deleteTodos',async(req,res)=>{
    const {todo} = req.body
    dbconnect()
    await todosTask.collection.deleteOne({todo: todo})
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen('3000',()=>{
    console.log('http://localhost:3000/')
})