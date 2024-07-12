import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    bio:{
        type: String,
        max: 500,
    },
    role:{
        type:String,
        enum:['instructor','student','admin'],
        default:'student',  
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },  
});

const User = mongoose.model("User", UserSchema);

export default User;