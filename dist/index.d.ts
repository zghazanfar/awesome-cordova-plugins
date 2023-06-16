import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare const ShootMode: Readonly<{
    /**
   * Sets a mode of scanning a single side identity
   */
    SCAN_1S_ONLY: string;
    /**
     * Sets a mode of scanning a double side identity
     */
    SCAN_2S_ONLY: string;
    /**
     * Sets a mode of scanning the front side of a double side identity
     */
    /**
     * Sets a mode of scanning of the back side of a double side identity
     */
    /**
     * Sets a mode of scanning of an additional document
     */
    SCAN_1S_OTHER: string;
    /**
     * Sets a mode of capturing a selfie picture
     */
    PHOTO_ONLY: string;
    /**
    * Sets a mode of scanning an ID
    */
    SCAN_ID_ONLY: string;
}>;
export declare const FontName: Readonly<{
    FONT_DEFAULT: string;
    FONT_DEFAULT_BOLD: string;
    FONT_SANS_SERIF_REGULAR: string;
    FONT_SERIF_REGULAR: string;
    FONT_OPEN_SANS_REGULAR: string;
    FONT_OPEN_SANS_BOLD: string;
    FONT_AVERTA_REGULAR: string;
    FONT_AVERTA_BOLD: string;
}>;
export declare const TransPortMethod: Readonly<{
    ALL: number;
    WEBSOCKETS: number;
    LONG_POLLING: number;
}>;
export declare const TextAlignment: Readonly<{
    LEFT: number;
    CENTER: number;
    RIGHT: number;
    JUSTIFIED: number;
    NATURAL: number;
}>;
interface CommonOptions {
    url: string;
    hawkId: string;
    hawkKey: string;
}
export interface OnBoardingApiOptions extends CommonOptions {
    requestId: string;
    port: number;
    apiPath: string;
    connectionTimeout?: number;
    readTimeout?: number;
    logging?: boolean;
}
export interface CameraScreenOptions extends CommonOptions {
    Mode: string;
    fontName?: string;
    fontSize?: number;
    fontColor?: string;
    autoCaptureTimeOut?: number;
    backVisibility?: boolean;
    cornersPathEffect?: boolean;
    dashPathEffect?: boolean;
    files?: string[];
    flashVisibility?: boolean;
    focusContinuePicture?: boolean;
    footerText?: string | string[];
    frontFrameBottomText?: string | string[];
    backFrameBottomText?: string | string[];
    frontSubHeaderText?: SubHeaderText;
    backSubHeaderText?: SubHeaderText;
    headerText?: string | string[];
    maxFrames?: number;
    overlayColor?: string;
    overlayAlpha?: number;
    roundedFocusFrame?: boolean;
    shutterButtonLight?: boolean;
    thumbnailVisibility?: boolean;
    videoTokenLang?: string;
    metadata?: string;
    frontRectangleRotated?: boolean;
    backRectangleRotated?: boolean;
    previewHeaderText?: string;
    previewFrameBottomText?: string;
    uploadButtonText?: string;
    retakeButtonText?: string;
    previewFontName?: string;
    previewFontSize?: number;
    previewFontColor?: string;
    withLayoutParams?: LayoutParams;
    apiCallLogging?: boolean;
    selfieScaleHeightFactor?: number;
    allowToFinishWithEmptyImageList?: boolean;
    previewBackgroundColor?: string;
    hasPreview?: boolean;
    useUploadImageButton?: boolean;
    bottomColor?: string;
    previewSliderColor?: string;
    previewBottomColor?: string;
    previewPromptTextFont?: number;
    allowTerminateOnPressingPreview?: boolean;
    terminateAddiotionalDocumentsOnFirst?: boolean;
    displayTopMessages?: boolean;
    displayBottomMessages?: boolean;
    takeDoubleSideMessage1?: string;
    takeDoubleSideMessage2?: string;
    displayMessages?: boolean;
    previewBottomMessage?: string;
    previewSliderRect?: CGReatRectangleOptions;
    previewPromptTextRect?: CGReatRectangleOptions;
    previewBoundingRect?: CGReatRectangleOptions;
    previewAcceptButtonRect?: CGReatRectangleOptions;
    smallDocumentRect?: CGReatRectangleOptions;
    bottomLabelRect?: CGReatRectangleOptions;
    bottomMessageAlignment?: number;
    previewPromptTextAlignment?: number;
}
export interface CGReatRectangleOptions {
    xCordinate: number;
    yCordinate: number;
    width: number;
    height: number;
}
export interface LayoutParams {
    width: number;
    height: number;
}
export interface SubHeaderText {
    subHeaderText: string | string[];
    drawable: string;
}
export interface VideoSessionOptions extends CommonOptions {
    tokBoxSessionId: string;
    tokBoxApiKey: string;
    tokBoxToken: string;
}
export interface SignalROptions {
    url: string;
    port: number;
    apiPath: string;
    useSignalR: boolean;
    transportMethod?: number;
}
/**
 * @name Idbox_ Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Idbox_Plugin } from '@awesome-cordova-plugins/idbox-plugin';
 *
 *
 * constructor(private idbox_Plugin: Idbox_Plugin) { }
 *
 * ...
 *
 *
 * this.idbox_Plugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Idbox_Plugin extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    registerRequest(arg1: any): Promise<any>;
    getUrl(): Promise<any>;
    getRequestId(arg1?: any): Promise<any>;
    initWithHawkCredentials(arg1: any): Promise<any>;
    getNextStep(arg1?: any): Promise<any>;
    skipDocumentStep(): Promise<any>;
    pleaseWait(arg1?: any): Promise<any>;
    setRequestMetaData(arg2: any): Promise<any>;
    getBatchSourceUploadDocs(): Promise<any>;
    uploadSelfie(arg1: any, arg2: any): Promise<any>;
    uploadIdentitySingleSide(arg1: any, arg2: any): Promise<any>;
    uploadIdentity2Sides(arg1: any, arg2: any): Promise<any>;
    uploadAdditionalDocuments(arg1: any, arg2: any): Promise<any>;
    videoCallQueue(arg1: any): Observable<any>;
    videoCall(arg1: any): Promise<any>;
    startProcess(): Promise<any>;
    uploadAdditionalDocumentsBranch(arg1: any, arg2: any): Promise<any>;
    scanSelfie(arg1: any): Promise<any>;
    scanIdentity(arg1: any): Promise<any>;
    scan1SIdentity(arg1: any): Promise<any>;
    scan2SIdentity(arg1: any): Promise<any>;
    scanAdditionalDocuments(arg1: any): Promise<any>;
    startVideoSession(arg1: any): Promise<any>;
    startListeningVideoSignalR(arg1: any): Promise<any>;
    startListeningSignalR(arg1: any): Promise<any>;
    pingServer(): Promise<any>;
    getRequestMetadata(): Promise<any>;
}
export {};
