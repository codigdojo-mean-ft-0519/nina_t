const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);