import mongoose from "mongoose";

const EnrollmentSchema = mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    enrolled_at: {
        type: Date,
        default: Date.now,
    },
    progress:{
        type:Number,
        default:0,
    },
});

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

export default Enrollment;