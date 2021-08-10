"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./configApi"), exports);
var configApi_1 = require("./configApi");
__exportStar(require("./containerApi"), exports);
var containerApi_1 = require("./containerApi");
__exportStar(require("./distributionApi"), exports);
var distributionApi_1 = require("./distributionApi");
__exportStar(require("./execApi"), exports);
var execApi_1 = require("./execApi");
__exportStar(require("./imageApi"), exports);
var imageApi_1 = require("./imageApi");
__exportStar(require("./networkApi"), exports);
var networkApi_1 = require("./networkApi");
__exportStar(require("./nodeApi"), exports);
var nodeApi_1 = require("./nodeApi");
__exportStar(require("./pluginApi"), exports);
var pluginApi_1 = require("./pluginApi");
__exportStar(require("./secretApi"), exports);
var secretApi_1 = require("./secretApi");
__exportStar(require("./serviceApi"), exports);
var serviceApi_1 = require("./serviceApi");
__exportStar(require("./sessionApi"), exports);
var sessionApi_1 = require("./sessionApi");
__exportStar(require("./swarmApi"), exports);
var swarmApi_1 = require("./swarmApi");
__exportStar(require("./systemApi"), exports);
var systemApi_1 = require("./systemApi");
__exportStar(require("./taskApi"), exports);
var taskApi_1 = require("./taskApi");
__exportStar(require("./volumeApi"), exports);
var volumeApi_1 = require("./volumeApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [configApi_1.ConfigApi, containerApi_1.ContainerApi, distributionApi_1.DistributionApi, execApi_1.ExecApi, imageApi_1.ImageApi, networkApi_1.NetworkApi, nodeApi_1.NodeApi, pluginApi_1.PluginApi, secretApi_1.SecretApi, serviceApi_1.ServiceApi, sessionApi_1.SessionApi, swarmApi_1.SwarmApi, systemApi_1.SystemApi, taskApi_1.TaskApi, volumeApi_1.VolumeApi];
//# sourceMappingURL=apis.js.map