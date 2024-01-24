const express = require("express")
const mongoose = require("mongoose")

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, {timeStamps: true})

const Accounts = mongoose. model('Accounts', accountSchema);

module.exports= {
    Accounts
}