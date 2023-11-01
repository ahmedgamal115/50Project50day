const mongoose = require('mongoose');

const disconnect = async()=>{
    try {
        mongoose.connection.close()
        console.log('disconnect to database')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {disconnect}