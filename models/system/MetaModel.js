const { StatusCodes } = require('http-status-codes');

function MetaModel(status, code, message) {
    this.status = status || false;
    this.code = code || null;
    this.message = message || null;
}

MetaModel.prototype.notAcceptable = function (message) {
    this.status = false;
    this.code = StatusCodes.NOT_ACCEPTABLE;
    this.message = message;
};

MetaModel.prototype.setFailMessage = function (code, message) {
    this.status = false;
    this.code = code;
    this.message = message;
};

MetaModel.prototype.setSuccessMessage = function (code, message = '') {
    this.status = true;
    this.code = code;
    this.message = message;
};

module.exports = MetaModel;
