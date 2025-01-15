import mongoose, { mongo } from "mongoose";

const chatSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    date: Date,
    message: String
})

export default mongoose.model('Chat', chatSchema);