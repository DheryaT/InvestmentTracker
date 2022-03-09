const mongoose = require('mongoose')

const portfolio = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a name value'],
    },
    tickers: [
        {
            tName: {
                type: String,
                //required: [true, 'Please add a ticker value'],
            },
            quant:{
                type: Number,
                //required: [true, 'Please add a qty value'],
            },
            date: {
                type: Date,
                //required: [true, 'Please add a date value'],
            },
            orgPrice: {
                type: Number
            }
        }
    ]
},{timestamps:true})

module.exports = mongoose.model('Portfolio', portfolio)