const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userLogInSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userDetailModel',
        required: true,
    },
    userLogInStatus: {
        type: Boolean
    },
    userLogInInfo: {
        type: Date
    },
    userLogOut: {
        type: Date
    },
    userAuthToken: {
        type: String,
        required: true
    }
});

mongoose.model('userLogInModel', userLogInSchema);