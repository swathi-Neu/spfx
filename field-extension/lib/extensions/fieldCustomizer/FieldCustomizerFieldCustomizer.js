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
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import { BaseFieldCustomizer } from '@microsoft/sp-listview-extensibility';
import * as strings from 'FieldCustomizerFieldCustomizerStrings';
import styles from './FieldCustomizerFieldCustomizer.module.scss';
var LOG_SOURCE = 'FieldCustomizerFieldCustomizer';
var FieldCustomizerFieldCustomizer = /** @class */ (function (_super) {
    __extends(FieldCustomizerFieldCustomizer, _super);
    function FieldCustomizerFieldCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldCustomizerFieldCustomizer.prototype.onInit = function () {
        // Add your custom initialization to this method.  The framework will wait
        // for the returned promise to resolve before firing any BaseFieldCustomizer events.
        Log.info(LOG_SOURCE, 'Activated FieldCustomizerFieldCustomizer with properties:');
        Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
        Log.info(LOG_SOURCE, "The following string should be equal: \"FieldCustomizerFieldCustomizer\" and \"" + strings.Title + "\"");
        return Promise.resolve();
    };
    FieldCustomizerFieldCustomizer.prototype.onRenderCell = function (event) {
        // Use this method to perform your custom cell rendering.
        var text = this.properties.sampleText + ": " + event.fieldValue;
        event.domElement.innerText = text;
        event.domElement.classList.add(styles.cell);
        event.domElement.innerHTML = "\n    <div class='" + styles.FieldCustomizer + "'>\n        <div class='" + styles.full + "'>\n        <div style='width: " + event.fieldValue + "px; background:#1b00ff; color:#c0c0c0'>\n            &nbsp; " + event.fieldValue + "\n        </div>\n        </div>\n    </div>";
    };
    FieldCustomizerFieldCustomizer.prototype.onDisposeCell = function (event) {
        // This method should be used to free any resources that were allocated during rendering.
        // For example, if your onRenderCell() called ReactDOM.render(), then you should
        // call ReactDOM.unmountComponentAtNode() here.
        _super.prototype.onDisposeCell.call(this, event);
    };
    __decorate([
        override
    ], FieldCustomizerFieldCustomizer.prototype, "onInit", null);
    __decorate([
        override
    ], FieldCustomizerFieldCustomizer.prototype, "onRenderCell", null);
    __decorate([
        override
    ], FieldCustomizerFieldCustomizer.prototype, "onDisposeCell", null);
    return FieldCustomizerFieldCustomizer;
}(BaseFieldCustomizer));
export default FieldCustomizerFieldCustomizer;
//# sourceMappingURL=FieldCustomizerFieldCustomizer.js.map