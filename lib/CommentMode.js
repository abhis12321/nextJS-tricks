import mongoose from "mongoose"
import { Users } from "./UserModel"


const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: Users,
    },
    comment
})