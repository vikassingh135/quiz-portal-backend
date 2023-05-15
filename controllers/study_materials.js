const StudyMaterial = require("../models/study_material");
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const studeyMaterial = new StudyMaterial(req.body);
    studeyMaterial.save((err,data) => {
        if(err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.listAll = (req,res) => {
    StudyMaterial.find().exec((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.listBooksBySem = (req, res) => {
    StudyMaterial.find({"year": req.params.year}).exec((err,data) => {
        if(err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
} 

exports.listStudyMaterialsBytype = (req,res) => {
    console.log(req.params.year, req.params.type);
    StudyMaterial.find({"year": req.params.year, "content_type": req.params.type}).exec((err,data) => {
        if(err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}