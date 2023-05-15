const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
