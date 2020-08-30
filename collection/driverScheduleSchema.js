const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var deliveryDetailSchema = new mongoose.Schema({
    driverDetailId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'deliveryDetailModel',
            required: true,
        }
    ],
    diverId: {
        type: Schema.Types.ObjectId,
        ref: 'driverDetailModel',
        required: true
    },
    date: {
        type: Date
    },
    deliverDriverAddress: {
        area: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        fromPincode: {
            type: Number
        },
        toPinCode: {
            type: Number
        }
    },
    driverStatus: {
        type: String,
        enum: ['Free', 'Booked', 'NA'],
        required: true
    }
});

mongoose.model('deliveryDetailModel', deliveryDetailSchema);