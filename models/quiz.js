const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    maxMarks: {
        type: String,
        required: true,
    },
    numberOfQuestions: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
}, {timestamps: true}
);

module.exports = mongoose.model("Quiz", quizSchema);