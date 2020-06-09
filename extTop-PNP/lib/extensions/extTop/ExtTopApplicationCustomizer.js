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
import TopMenu from './components/TopMenu';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { sp } from '@pnp/sp';
import styles from './AppCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'ExtTopApplicationCustomizerStrings';
var LOG_SOURCE = 'ExtTopApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var ExtTopApplicationCustomizer = /** @class */ (function (_super) {
    __extends(ExtTopApplicationCustomizer, _super);
    function ExtTopApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTopApplicationCustomizer.prototype.onInit = function () {
        var _this = this;
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
            _this.context.placeholderProvider.changedEvent.add(_this, _this._renderPlaceHolders);
            _this._renderPlaceHolders();
        });
        // let message: string = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        //return Promise.resolve();
    };
    ExtTopApplicationCustomizer.prototype._renderPlaceHolders = function () {
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
                var TopTermSetId = this.properties.TopTermSetId;
                if (!TopTermSetId) {
                    TopTermSetId = "(Top property was not defined.)";
                }
                if (this._topPlaceholder.domElement) {
                    var element = React.createElement(TopMenu, {
                        TopterSetId: this.properties.TopTermSetId
                    });
                    ReactDom.render(element, this._topPlaceholder.domElement);
                    // this._topPlaceholder.domElement.innerHTML = `
                    // <div class="${styles.app}">
                    //   <div class="${styles.top}">
                    //     <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
                    //       TopTermSetId
                    //     )}
                    //   </div>
                    // </div>`;
                }
            }
        }
        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
            // The extension should not assume that the expected placeholder is available.
            if (!this._bottomPlaceholder) {
                console.error("The expected placeholder (Bottom) was not found.");
                return;
            }
            if (this.properties) {
                var BottomTermSetId = this.properties.BottomTermSetId;
                if (!BottomTermSetId) {
                    BottomTermSetId = "(Bottom property was not defined.)";
                }
                if (this._bottomPlaceholder.domElement) {
                    this._bottomPlaceholder.domElement.innerHTML = "\n        <div class=\"" + styles.app + "\">\n          <div class=\"" + styles.bottom + "\">\n            <i class=\"ms-Icon ms-Icon--Info\" aria-hidden=\"true\"></i> " + escape(BottomTermSetId) + "\n          </div>\n        </div>";
                }
            }
        }
    };
    __decorate([
        override
    ], ExtTopApplicationCustomizer.prototype, "onInit", null);
    return ExtTopApplicationCustomizer;
}(BaseApplicationCustomizer));
export default ExtTopApplicationCustomizer;
//# sourceMappingURL=ExtTopApplicationCustomizer.js.map