const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var deliveryDetailSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userDetailModel',
        required: true,
    },
    driverId: {
        type: Schema.Types.ObjectId,
        ref: 'driverDetailModel',
        required: true,
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'orderDetailModel',
        required: true
    },
    deliveryDate: {
        type: Date
    },
    sourceAddress: {
        address1: {
            type: String
        },
        landmark: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number
        }
    },
    destinationAddress: {
        address1: {
            type: String
        },
        landmark: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number
        }
    },
    orderStatus: {
        type: String,
        enum: ['Pick', 'InTransit', 'Cancelled', 'Delivered'],
        required: true
    },
    orderCancelDetail: [
        {
            cancelReason: { type: String },
            cancelDate: {
                type: Date
            }
        }        
    ]
});

mongoose.model('deliveryDetailModel', deliveryDetailSchema);