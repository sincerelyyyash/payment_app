const mongoose = require("mongoose");
const express = require("express");
const Accounts = require("../Database/accounts.model.js");

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        minLength: 6,
        maxLength: 25
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 12
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    }
},{timeStamps: true})


const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Accounts
}

