const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderDetailSchema = new mongoose.Schema({
    sellerId: {
        type: Schema.Types.ObjectId,
        //here is the reference of seller schema
        ref: 'userDetailModel',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userDetailModel',
        required: true,
    },
    productCode: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date
    },
    quantity: {
        type: Number,
        required: true
    }
});

mongoose.model('orderDetailModel', orderDetailSchema);