const mongoose = require('mongoose')
const db = "mongodb+srv://cavin:signature712@cluster0.8gmf5.mongodb.net/Ecommerce?retryWrites=true&w=majority"

const connectionDB = async () => {
    try {
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log("MongoDb connected...")
    } catch (error) {
        console.log("Error while connecting database...")
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectionDB