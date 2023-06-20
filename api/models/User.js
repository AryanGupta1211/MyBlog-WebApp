const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

// Add a pre-save hook to check for duplicate usernames
UserSchema.pre('save', async function (next) {
    try {
        const user = await UserModel.findOne({ username: this.username });
        if (user) {
            const err = new Error('Username already exists');
            next(err);
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
});

module.exports = UserModel;
