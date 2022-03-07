const mongoose = require('mongoose');
const crypto = require("crypto");
const {v4: uuid} = require("uuid")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String
},{timestamps:true});

userSchema.virtual("password").set(function (password) {
    this._password = password;
    this.salt = uuid()
    this.hashed_password = this.encryptPassword(password)
}).get(function (){
    return this._password
});

userSchema.method({
    encryptPassword: function (password) {
        if(!password)
        {
            return ""
        }
        try {
            return crypto.createHmac("sha256", this.salt).update(password).digest("base64")
        } catch (error) {
            return ""
        }
    }
})


module.exports = mongoose.model("User", userSchema);
