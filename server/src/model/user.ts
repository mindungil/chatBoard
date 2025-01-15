import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: Number,
    date: Date,
})

export default mongoose.model('User', userSchema);