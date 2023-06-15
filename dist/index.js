import { Idbox_Plugin } from './workspace/awesome-cordova-plugins/src';
window.IonicNative = {
Idbox_Plugin
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);