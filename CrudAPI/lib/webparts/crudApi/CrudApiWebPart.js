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
import styles from './CrudApiWebPart.module.scss';
import * as strings from 'CrudApiWebPartStrings';
import { SPHttpClient } from '@microsoft/sp-http';
var CrudApiWebPart = /** @class */ (function (_super) {
    __extends(CrudApiWebPart, _super);
    function CrudApiWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrudApiWebPart.prototype.AddEventListeners = function () {
        var _this = this;
        document.getElementById('AddSPItem').addEventListener('click', function () { return _this.AddSPItem(); });
        document.getElementById('UpdateSPItem').addEventListener('click', function () { return _this.UpdateSPItem(); });
        document.getElementById('DeleteSPItem').addEventListener('click', function () { return _this.DeleteSPItem(); });
    };
    CrudApiWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Employee')/Items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    CrudApiWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getListData()
            .then(function (response) {
            _this._renderList(response.value);
        });
    };
    CrudApiWebPart.prototype._renderList = function (items) {
        var html = '<table class="TFtable" border=1 width=100% style="border-collapse: collapse;">';
        html += "<th></th><th>ID</th><th>Title</th><th>EmpName</th><th>EmpJob</th>";
        if (items.length > 0) {
            items.forEach(function (item) {
                html += "  \n           <tr>  \n           <td>  <input type=\"radio\" id=\"EmployeeId\" name=\"EmployeeId\" value=\"" + item.Id + "\"> <br> </td>   \n           <td>" + item.Id + "</td> \n           <td>" + item.Title + "</td>  \n          <td>" + item.EmployeeName + "</td>\n          <td>" + item.EmployeeJob + "</td>\n          \n          </tr>  \n          ";
            });
        }
        else {
            html += "No records...";
        }
        html += "</table>";
        var listContainer = this.domElement.querySelector('#DivGetItems');
        listContainer.innerHTML = html;
    };
    CrudApiWebPart.prototype.render = function () {
        this.domElement.innerHTML = "  \n\n\n    <div class=\"parentContainer\" style=\"background-color: white\">    \n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">    \n       <div class=\"ms-Grid-col ms-u-lg   \n   ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">   \n     \n           \n       </div>    \n    </div>    \n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">    \n       <div style=\"background-color:Black;color:white;text-align: center;font-weight: bold;font-size:   \n   x;\">Employee Details</div>    \n           \n    </div>    \n    <div style=\"background-color: white\" >    \n       <form >    \n          <br>    \n          <div data-role=\"header\">    \n             <h3>Add SharePoint List Items</h3>    \n          </div>    \n           <div data-role=\"main\" class=\"ui-content\">    \n             <div >    \n                \n             <input id=\"Title\"  placeholder=\"Title\"/>  \n               <input id=\"EmployeeName\"  placeholder=\"EmployeeName\"/>    \n               <input id=\"EmployeeJob\"  placeholder=\"EmployeeJob\"/>    \n               <button id=\"AddSPItem\"  type=\"submit\" >Add</button>    \n               <button id=\"UpdateSPItem\" type=\"submit\" >Update</button>    \n               <button id=\"DeleteSPItem\"  type=\"submit\" >Delete</button>  \n             </div>    \n           </div>    \n\n           <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">  \n           <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">  \n             <div class=\"status\"></div>  \n             <ul class=\"items\"><ul>  \n           </div>  \n         </div>  \n       </form>   \n        \n    </div>    \n    <br>    \n    <div style=\"background-color: white\" id=\"DivGetItems\" />    \n      \n    </div>    \n       \n    ";
        this._renderListAsync();
        this.AddEventListeners();
    };
    CrudApiWebPart.prototype.AddSPItem = function () {
        var body = JSON.stringify({
            'Title': document.getElementById('Title')["value"],
            'EmployeeName': document.getElementById('EmployeeName')["value"],
            'EmployeeJob': document.getElementById('EmployeeJob')["value"]
        });
        this.context.spHttpClient.post(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Employee')/items", SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': ''
            },
            body: body
        })
            .then(function (response) {
            return response.json();
        });
        // .then((item: ISPList): void => {  
        //   this.updateStatus(`Item '${item.Title}' (ID: ${item.Id}) successfully created`);  
        // }, (error: any): void => {  
        //   this.updateStatus('Error while creating the item: ' + error);  
        // });  
    };
    CrudApiWebPart.prototype.updateStatus = function (status, items) {
        if (items === void 0) { items = []; }
        this.domElement.querySelector('.status').innerHTML = status;
        this.updateItemsHtml(items);
    };
    CrudApiWebPart.prototype.updateItemsHtml = function (items) {
        this.domElement.querySelector('.items').innerHTML = items.map(function (item) { return "<li>" + item.Title + " (" + item.Id + ")</li>"; }).join("");
    };
    CrudApiWebPart.prototype.UpdateSPItem = function () {
        var _this = this;
        var EmployeeId = this.domElement.querySelector('input[name = "EmployeeId"]:checked')["value"];
        var body = JSON.stringify({
            //'Title': document.getElementById('Title')["value"],
            'Title': "Updated Item " + new Date()
        });
        this.context.spHttpClient.post(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Employee')/items(" + EmployeeId + ")", SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': '',
                'IF-MATCH': '*',
                'X-HTTP-Method': 'MERGE'
            },
            body: body
        }).then(function (response) {
            _this.updateStatus("Item with ID: " + EmployeeId + " successfully updated");
        }, function (error) {
            _this.updateStatus("Error updating item: " + error);
        });
    };
    CrudApiWebPart.prototype.DeleteSPItem = function () {
        var EmployeeId = this.domElement.querySelector('input[name = "EmployeeId"]:checked')["value"];
        this.context.spHttpClient.post(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Employee')/items(" + EmployeeId + ")", SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-type': 'application/json;odata=verbose',
                'odata-version': '',
                'IF-MATCH': "*",
                'X-HTTP-Method': 'DELETE'
            }
        });
        // .then((response: SPHttpClientResponse): void => {  
        //   this.updateStatus(`Item with ID: ${EmployeeId} successfully deleted`);  
        // }, (error: any): void => {  
        //   this.updateStatus(`Error deleting item: ${error}`);  
        // });           
    };
    Object.defineProperty(CrudApiWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CrudApiWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return CrudApiWebPart;
}(BaseClientSideWebPart));
export default CrudApiWebPart;
//# sourceMappingURL=CrudApiWebPart.js.map