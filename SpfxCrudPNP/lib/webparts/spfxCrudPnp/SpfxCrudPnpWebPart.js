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
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import styles from './SpfxCrudPnpWebPart.module.scss';
import * as strings from 'SpfxCrudPnpWebPartStrings';
var SpfxCrudPnpWebPart = /** @class */ (function (_super) {
    __extends(SpfxCrudPnpWebPart, _super);
    function SpfxCrudPnpWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxCrudPnpWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    SpfxCrudPnpWebPart.prototype.AddEventListeners = function () {
        var _this = this;
        document.getElementById('AddSPItem').addEventListener('click', function () { return _this.AddSPItem(); });
        document.getElementById('UpdateSPItem').addEventListener('click', function () { return _this.UpdateSPItem(); });
        document.getElementById('DeleteSPItem').addEventListener('click', function () { return _this.DeleteSPItem(); });
    };
    SpfxCrudPnpWebPart.prototype._getSPItems = function () {
        return sp.web.lists.getByTitle("Order").items.get().then(function (response) {
            return response;
        });
    };
    SpfxCrudPnpWebPart.prototype.getSPItems = function () {
        var _this = this;
        this._getSPItems()
            .then(function (response) {
            _this._renderList(response);
        });
    };
    SpfxCrudPnpWebPart.prototype._renderList = function (items) {
        var html = '<table class="TFtable" border=1 width=style="bordercollapse: collapse;">';
        html += "<th></th><th>Id</th><th>Name</th><th>OrderNumber</th>";
        if (items.length > 0) {
            items.forEach(function (item) {
                html += "    \n            <tr>   \n            <td>  <input type=\"radio\" id=\"orderId\" name=\"orderId\" value=\"" + item.Id + "\"> <br> </td>   \n            \n           <td>" + item.Id + "</td>    \n           <td>" + item.Title + "</td>    \n           <td>" + item.OrderNumber + "</td>    \n           </tr>    \n           ";
            });
        }
        else {
            html += "No records...";
        }
        html += "</table>";
        var listContainer = this.domElement.querySelector('#DivGetItems');
        listContainer.innerHTML = html;
    };
    SpfxCrudPnpWebPart.prototype.render = function () {
        this.domElement.innerHTML = "    \n     <div class=\"parentContainer\" style=\"background-color: white\">    \n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">    \n       <div class=\"ms-Grid-col ms-u-lg   \n   ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">   \n     \n           \n       </div>    \n    </div>    \n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">    \n       <div style=\"background-color:Black;color:white;text-align: center;font-weight: bold;font-size:   \n   x;\">Order Details using PNP</div>    \n           \n    </div>    \n    <div style=\"background-color: white\" >    \n       <form >    \n          <br>    \n          <div data-role=\"header\">    \n             <h3>SharePoint List Items</h3>    \n          </div>    \n           <div data-role=\"main\" class=\"ui-content\">    \n             <div >    \n                \n               \n               <input id=\"Name\"  placeholder=\"Name\"/>    \n               <input id=\"OrderNumber\"  placeholder=\"OrderNumber\"/>    \n               <button id=\"AddSPItem\"  type=\"submit\" >Add</button>    \n               <button id=\"UpdateSPItem\" type=\"submit\" >Update</button>    \n               <button id=\"DeleteSPItem\"  type=\"submit\" >Delete</button>  \n             </div>    \n           </div>    \n       </form>    \n    </div>    \n    <br>    \n    <div style=\"background-color: white\" id=\"DivGetItems\" />    \n      \n    </div>    \n       \n    ";
        this.getSPItems();
        this.AddEventListeners();
    };
    SpfxCrudPnpWebPart.prototype.AddSPItem = function () {
        sp.web.lists.getByTitle('Order').items.add({
            ProfileName: document.getElementById('Name')["value"],
            ProfileJob: document.getElementById('OrderNumber')["value"]
        });
        alert("Record with Order Name : " + document.getElementById('Name')["value"] + " Added !");
    };
    SpfxCrudPnpWebPart.prototype.UpdateSPItem = function () {
        var orderId = this.domElement.querySelector('input[name = "orderId"]:checked')["value"];
        sp.web.lists.getByTitle("Order").items.getById(orderId).update({
            ProfileName: document.getElementById('Name')["value"],
            ProfileJob: document.getElementById('OrderNumber')["value"]
        });
        alert("Record with Order ID : " + orderId + " Updated !");
    };
    SpfxCrudPnpWebPart.prototype.DeleteSPItem = function () {
        var orderId = this.domElement.querySelector('input[name = "orderId"]:checked')["value"];
        sp.web.lists.getByTitle("Order").items.getById(orderId).delete();
        alert("Record with Order ID : " + orderId + " Deleted !");
    };
    Object.defineProperty(SpfxCrudPnpWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxCrudPnpWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxCrudPnpWebPart;
}(BaseClientSideWebPart));
export default SpfxCrudPnpWebPart;
//# sourceMappingURL=SpfxCrudPnpWebPart.js.map