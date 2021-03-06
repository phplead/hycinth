const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, default: "User", enum: ['User', 'Vendor', 'Admin'] },
    createdDate: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    EmailVerify: { type: Boolean, default: false },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);