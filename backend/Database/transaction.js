const mongoose = require("mongoose")
const Accounts = require("../Database/accounts.model.js");

export const transferFunds = async(fromAccount, toAccount, amount )=>{
    await Accounts.findByIdAndUpdate(fromAccount, {$inc: {balance: -amount}});

    await Accounts.findByIdAndUpdate(toAccount, {$inc: {balance: +amount}})
}

