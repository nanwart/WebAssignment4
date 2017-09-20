var mongoose = require('mongoose');
var fitnessplan = mongoose.model('fitnessplan');

module.exports.GetFitness = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.fitnessApp = function (req, res) {
    sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.GetOneFitness = function (req, res) {
    //sendJsonResponse(res, 200, { "status": "success" });
    if (req.params && req.params._id) {
        fitnessplan
            .findById(req.params._id)
            .exec(function (err, fitness) {
                if (!fitness) {
                    sendJsonResponse(res, 404, {
                        "message": "Fitnessid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, fitness);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No fitnessid in request"
        });
    }
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