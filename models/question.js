const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        type: String
    },
    optionA: {
        type: String,
    },
    optionB: {
        type: String,
    },
    optionC: {
        type: String,
    },
    optionD: {
        type: String,
    },
    correctAnswer:{
        type: String
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }
},
    {timestamps: true}
)

module.exports = mongoose.model("Question", questionSchema)