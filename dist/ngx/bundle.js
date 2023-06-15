'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
   var n = Object.create(null);
   if (e) {
      Object.keys(e).forEach(function (k) {
         if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
               enumerable: true,
               get: function () { return e[k]; }
            });
         }
      });
   }
   n.default = e;
   return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var ShootMode = Object.freeze({
    /**
   * Sets a mode of scanning a single side identity
   */
    SCAN_1S_ONLY: "SCAN_1S",
    /**
     * Sets a mode of scanning a double side identity
     */
    SCAN_2S_ONLY: "SCAN_2S",
    /**
     * Sets a mode of scanning the front side of a double side identity
     */
    /**
     * Sets a mode of scanning of the back side of a double side identity
     */
    /**
     * Sets a mode of scanning of an additional document
     */
    SCAN_1S_OTHER: "SCAN_1S_OTHER",
    /**
     * Sets a mode of capturing a selfie picture
     */
    PHOTO_ONLY: "PHOTO_ONLY",
    /**
    * Sets a mode of scanning an ID
    */
    SCAN_ID_ONLY: "SCAN_ID_ONLY",
});
var FontName = Object.freeze({
    FONT_DEFAULT: "Default",
    FONT_DEFAULT_BOLD: "Default_bold",
    FONT_SANS_SERIF_REGULAR: "sans_serif",
    FONT_SERIF_REGULAR: "serif",
    FONT_OPEN_SANS_REGULAR: "open_sans",
    FONT_OPEN_SANS_BOLD: "open_sans_bold",
    FONT_AVERTA_REGULAR: "averta_regular",
    FONT_AVERTA_BOLD: "averta_bold.otf",
});
var TransPortMethod = Object.freeze({
    ALL: 0,
    WEBSOCKETS: 1,
    LONG_POLLING: 2,
});
var TextAlignment = Object.freeze({
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    JUSTIFIED: 3,
    NATURAL: 4,
});
var Idbox_Plugin = /** @class */ (function (_super) {
    tslib.__extends(Idbox_Plugin, _super);
    function Idbox_Plugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idbox_Plugin.prototype.registerRequest = function (arg1) { return core.cordova(this, "registerRequest", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.getUrl = function () { return core.cordova(this, "getUrl", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.getRequestId = function (arg1) { return core.cordova(this, "getRequestId", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.initWithHawkCredentials = function (arg1) { return core.cordova(this, "initWithHawkCredentials", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.getNextStep = function (arg1) { return core.cordova(this, "getNextStep", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.skipDocumentStep = function () { return core.cordova(this, "skipDocumentStep", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.pleaseWait = function (arg1) { return core.cordova(this, "pleaseWait", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.setRequestMetaData = function (arg2) { return core.cordova(this, "setRequestMetaData", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.getBatchSourceUploadDocs = function () { return core.cordova(this, "getBatchSourceUploadDocs", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.uploadSelfie = function (arg1, arg2) { return core.cordova(this, "uploadSelfie", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.uploadIdentitySingleSide = function (arg1, arg2) { return core.cordova(this, "uploadIdentitySingleSide", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.uploadIdentity2Sides = function (arg1, arg2) { return core.cordova(this, "uploadIdentity2Sides", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.uploadAdditionalDocuments = function (arg1, arg2) { return core.cordova(this, "uploadAdditionalDocuments", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.videoCallQueue = function (arg1) { return core.cordova(this, "videoCallQueue", { "observable": true }, arguments); };
    Idbox_Plugin.prototype.videoCall = function (arg1) { return core.cordova(this, "videoCall", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.startProcess = function () { return core.cordova(this, "startProcess", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.uploadAdditionalDocumentsBranch = function (arg1, arg2) { return core.cordova(this, "uploadAdditionalDocumentsBranch", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.scanSelfie = function (arg1) { return core.cordova(this, "scanSelfie", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.scanIdentity = function (arg1) { return core.cordova(this, "scanIdentity", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.scan1SIdentity = function (arg1) { return core.cordova(this, "scan1SIdentity", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.scan2SIdentity = function (arg1) { return core.cordova(this, "scan2SIdentity", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.scanAdditionalDocuments = function (arg1) { return core.cordova(this, "scanAdditionalDocuments", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.startVideoSession = function (arg1) { return core.cordova(this, "startVideoSession", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.startListeningVideoSignalR = function (arg1) { return core.cordova(this, "startListeningVideoSignalR", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.startListeningSignalR = function (arg1) { return core.cordova(this, "startListeningSignalR", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.pingServer = function () { return core.cordova(this, "pingServer", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.prototype.getRequestMetadata = function () { return core.cordova(this, "getRequestMetadata", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Idbox_Plugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Idbox_Plugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Idbox_Plugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Idbox_Plugin });
    Idbox_Plugin.pluginName = "Idbox_Plugin";
    Idbox_Plugin.plugin = "Idbox_Plugin";
    Idbox_Plugin.pluginRef = "cordova.plugins.Idbox_Plugin";
    Idbox_Plugin.repo = "";
    Idbox_Plugin.install = "";
    Idbox_Plugin.installVariables = [];
    Idbox_Plugin.platforms = ["Android", "iOS"];
    Idbox_Plugin = tslib.__decorate([], Idbox_Plugin);
    return Idbox_Plugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Idbox_Plugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { registerRequest: [], getUrl: [], getRequestId: [], initWithHawkCredentials: [], getNextStep: [], skipDocumentStep: [], pleaseWait: [], setRequestMetaData: [], getBatchSourceUploadDocs: [], uploadSelfie: [], uploadIdentitySingleSide: [], uploadIdentity2Sides: [], uploadAdditionalDocuments: [], videoCallQueue: [], videoCall: [], startProcess: [], uploadAdditionalDocumentsBranch: [], scanSelfie: [], scanIdentity: [], scan1SIdentity: [], scan2SIdentity: [], scanAdditionalDocuments: [], startVideoSession: [], startListeningVideoSignalR: [], startListeningSignalR: [], pingServer: [], getRequestMetadata: [] } });

exports.FontName = FontName;
exports.Idbox_Plugin = Idbox_Plugin;
exports.ShootMode = ShootMode;
exports.TextAlignment = TextAlignment;
exports.TransPortMethod = TransPortMethod;
