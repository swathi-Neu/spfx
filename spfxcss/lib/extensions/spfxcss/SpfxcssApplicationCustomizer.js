var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
//import * as $ from 'jquery';
import * as strings from 'SpfxcssApplicationCustomizerStrings';
var LOG_SOURCE = 'SpfxcssApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var SpfxcssApplicationCustomizer = /** @class */ (function (_super) {
    __extends(SpfxcssApplicationCustomizer, _super);
    function SpfxcssApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._externalJsUrl = "https://neudesicresearch.sharepoint.com/Style%20Library/plugins/jquery.js";
        _this._externalJsUrl1 = "https://neudesicresearch.sharepoint.com/Style%20Library/test.js";
        return _this;
    }
    //private _externalCss: string = "https://neudesicresearch.sharepoint.com/Style%20Library/pageStyles.css";
    SpfxcssApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var cssUrl = this.properties.cssurl;
        var cssUrl1 = this.properties.pagecss;
        if (cssUrl) {
            // inject the style sheet
            var head_1 = document.getElementsByTagName("head")[0] || document.documentElement;
            var customStyle_1 = document.createElement("link");
            customStyle_1.href = cssUrl;
            customStyle_1.rel = "stylesheet";
            customStyle_1.type = "text/css";
            head_1.insertAdjacentElement("beforeEnd", customStyle_1);
        }
        var scriptTag = document.createElement("script");
        scriptTag.src = this._externalJsUrl;
        scriptTag.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag);
        console.log("Added jquery script link.");
        var scriptTag1 = document.createElement("script");
        scriptTag1.src = this._externalJsUrl1;
        scriptTag1.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag1);
        console.log("Added jquery script link.");
        var head = document.getElementsByTagName("head")[0] || document.documentElement;
        var customStyle = document.createElement("link");
        customStyle.href = cssUrl1;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);
        // let message: string = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        return Promise.resolve();
    };
    __decorate([
        override
    ], SpfxcssApplicationCustomizer.prototype, "onInit", null);
    return SpfxcssApplicationCustomizer;
}(BaseApplicationCustomizer));
export default SpfxcssApplicationCustomizer;
//# sourceMappingURL=SpfxcssApplicationCustomizer.js.map