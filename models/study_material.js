const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    content_type: {
        type: String
    },
    year: {
        type: String
    },
    branch: {
        type: String
    },
    link: {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model("StudyMaterial", studyMaterialSchema);