const mongoose = require('mongoose')

const Phone = mongoose.model('Phone', {
    name: {
        type: String,
        required: true

    },
    screenSize: {
        type: Number,
        required: true,
        min: 0
    },
    processor: {
        type: String,
        required: true
    },
    graphicCard: {
        type: String,
        required: true
    },
    ramMemory: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        enum: ['Samsung', 'Apple', 'LG', 'Huawvei'],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true

    },
    Discount: {
        type: Boolean,
        default: false
    },
    NumberOfPreviews: {
        type: Number,
        default: 0
    }


})

module.exports = Phone