import mongoose from "mongoose";

const LessonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        default: "",
    },
    order:{
        type:Number,
        required:true,
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

const Lesson = mongoose.model("Lesson", LessonSchema);

export default Lesson;