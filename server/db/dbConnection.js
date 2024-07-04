const mongoose = require('mongoose');

const dbUri = 'mongodb://127.0.0.1:27017/food-ordering';

const connectToDb = async() => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error('Connection error', e.message)
        process.exit(1)
    }
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB')
})

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected')
})

// Close the Mongoose connection when the Node.js process ends
process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log('Mongoose connection disconnected due to app termination')
    process.exit(0)
})

connectToDb();

module.exports = mongoose.connection;