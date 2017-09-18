var mongoose = require('mongoose');
var fitnessplan = mongoose.model('fitnessplan');

module.exports.GetFitness = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.fitnessApp = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.GetOneFitness = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.EditFitness = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.DeleteFitness = function (req, res) {sendJsonResponse(res, 200, { "status": "success" });
    sendJsonResponse(res, 200, { "status": "success" });
};

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}