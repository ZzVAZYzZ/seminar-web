const mongoose = require("mongoose");

const schema = mongoose.Schema({
    mssv: {
        type: String,
        required: [true,"please add the user name"],
    },
    hoTen: {
        type: String,
        required: [true,"please add the user email address"],
        unique: [true,"Email address already taken"],
    },
})

module.exports = mongoose.model("diemdanh", schema);