const mongoose = require("mongoose");

const completedTestSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        },
        user_answers: []
    },
    {timestamps: true}
);

module.exports = mongoose.model("CompletedTest", completedTestSchema);