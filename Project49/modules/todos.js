const mongoose = require('mongoose');

const todos = mongoose.Schema({
    todo:{
        type:"String"
    },
    complete:{
        type:"boolean",
        default:false
    },
}, { timestamps: true })

module.exports = {todosTask :mongoose.models.todosTask || mongoose.model('todosTask',todos)}