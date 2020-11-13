const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    role: {
        type: String,
        default: "user"
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User