// const Category = require("../models/category");
// const { errorHandler } = require("../helpers/dbErrorHandler");
// const ObjectId = require('mongodb').ObjectID;

const CompletedTest = require("../models/completed_test");
const {errorHandler} = require("../helpers/dbErrorHandler");


exports.create = (req,res) => {
    const completed_test = new CompletedTest(req.body);
    completed_test.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({data});
    })
}

exports.read = (req,res) => {
    return CompletedTest.find({"user":req.params.userId}).exec((err, data) => {

        if(err) {
            return res.json(400).json({
                error: errorHandler(err)
            });
        }
        else res.json(data);
    })
}

// exports.listByCategory = (req, res) => {
//     console.log("Quesetion controller par aa hgye hain", req.params);
//     Question.find({ quiz: req.params.quizId }).exec((err, data) => {
//       if (err) {
//         return res.status(400).json({
//           error: dbErrorHandler.errorHandler(err),
//         });
//       }
//       res.json(data);
//     });
//   };