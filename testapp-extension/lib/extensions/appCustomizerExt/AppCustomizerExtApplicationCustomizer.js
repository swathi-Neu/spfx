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
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { sp } from '@pnp/sp';
import * as strings from 'AppCustomizerExtApplicationCustomizerStrings';
var LOG_SOURCE = 'AppCustomizerExtApplicationCustomizer';
import TopMenu from './components/TopMenu';
/** A Custom Action which can be run during execution of a Client Side Application */
var AppCustomizerExtApplicationCustomizer = /** @class */ (function (_super) {
    __extends(AppCustomizerExtApplicationCustomizer, _super);
    function AppCustomizerExtApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //private _bottomPlaceholder: PlaceholderContent | undefined;
    AppCustomizerExtApplicationCustomizer.prototype.onInit = function () {
        var _this = this;
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
            _this.context.placeholderProvider.changedEvent.add(_this, _this._renderPlaceHolders);
            return Promise.resolve();
        });
        //const cssUrl: string = this.properties.cssurl;
        //   if (cssUrl) {
        //     // inject the style sheet
        //     const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
        //     let customStyle: HTMLLinkElement = document.createElement("link");
        //     customStyle.href = cssUrl;
        //     customStyle.rel = "stylesheet";
        //     customStyle.type = "text/css";
        //    head.insertAdjacentElement("beforeEnd", customStyle);
        // }
        // Wait for the placeholders to be created (or handle them being changed) and then
        // render.
        this._renderPlaceHolders();
    };
    AppCustomizerExtApplicationCustomizer.prototype._renderPlaceHolders = function () {
        this.context.placeholderProvider.placeholderNames
            .map(function (name) { return PlaceholderName[name]; })
            .join(", ");
        // Handling the top placeholder
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
            // The extension should not assume that the expected placeholder is available.
            if (!this._topPlaceholder) {
                console.error("The expected placeholder (Top) was not found.");
                return;
            }
            if (this.properties) {
                var topString = this.properties.TermsetId;
                //let logoString:string = this.properties.Logo;
                if (!topString) {
                    topString = "(TermsetId property was not defined.)";
                }
                if (this._topPlaceholder.domElement) {
                    var element = React.createElement(TopMenu, {
                        terSetId: this.properties.TermsetId
                    });
                    ReactDom.render(element, this._topPlaceholder.domElement);
                }
            }
        }
    };
    __decorate([
        override
    ], AppCustomizerExtApplicationCustomizer.prototype, "onInit", null);
    return AppCustomizerExtApplicationCustomizer;
}(BaseApplicationCustomizer));
export default AppCustomizerExtApplicationCustomizer;
//# sourceMappingURL=AppCustomizerExtApplicationCustomizer.js.map