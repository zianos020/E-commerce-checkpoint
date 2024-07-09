// 1-require mongoose
const mongoose = require("mongoose")

// 2-create db
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("data base connected succ..")
    } catch (error) {
        console.log(`failed to connect to db cuz ${error}`)
    }
}

module.exports = connectDB