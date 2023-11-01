const mongoose = require('mongoose');

const dbconnect = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todos')
        console.log('connect to database')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {dbconnect}