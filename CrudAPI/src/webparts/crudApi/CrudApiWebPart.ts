import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import {ISPList,ISPLists} from './IListItems';
import styles from './CrudApiWebPart.module.scss';
import * as strings from 'CrudApiWebPartStrings';
import {  
  SPHttpClient,SPHttpClientResponse, ISPHttpClientOptions  
} from '@microsoft/sp-http';
export interface ICrudApiWebPartProps {
  description: string;
}

export default class CrudApiWebPart extends BaseClientSideWebPart<ICrudApiWebPartProps> {

  private AddEventListeners() : void{   
    document.getElementById('AddSPItem').addEventListener('click',()=>this.AddSPItem());    
    document.getElementById('UpdateSPItem').addEventListener('click',()=>this.UpdateSPItem());    
    document.getElementById('DeleteSPItem').addEventListener('click',()=>this.DeleteSPItem());    
   }

  private _getListData(): Promise<ISPLists> {  
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists/GetByTitle('Employee')/Items`, SPHttpClient.configurations.v1)  
        .then((response) => {           
          return response.json();  
        });  
    } 
    private _renderListAsync(): void {     
         this._getListData()  
        .then((response) => {  
          this._renderList(response.value);  
        });  
       
  }

  private _renderList(items: ISPList[]): void {  
    let html: string = '<table class="TFtable" border=1 width=100% style="border-collapse: collapse;">';  
    html += `<th></th><th>ID</th><th>Title</th><th>EmpName</th><th>EmpJob</th>`;  
    if (items.length>0)  
  { 
    items.forEach((item: ISPList) => {  
      html += `  
           <tr>  
           <td>  <input type="radio" id="EmployeeId" name="EmployeeId" value="${item.Id}"> <br> </td>   
           <td>${item.Id}</td> 
           <td>${item.Title}</td>  
          <td>${item.EmployeeName}</td>
          <td>${item.EmployeeJob}</td>
          
          </tr>  
          `;  
    });  
  }else
  {  
    html +="No records...";  
  } 
    html += `</table>`;  
    const listContainer: Element = this.domElement.querySelector('#DivGetItems');  
    listContainer.innerHTML = html;  
  } 

  public render(): void {
    this.domElement.innerHTML = `  


    <div class="parentContainer" style="background-color: white">    
    <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">    
       <div class="ms-Grid-col ms-u-lg   
   ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">   
     
           
       </div>    
    </div>    
    <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">    
       <div style="background-color:Black;color:white;text-align: center;font-weight: bold;font-size:   
   x;">Employee Details</div>    
           
    </div>    
    <div style="background-color: white" >    
       <form >    
          <br>    
          <div data-role="header">    
             <h3>Add SharePoint List Items</h3>    
          </div>    
           <div data-role="main" class="ui-content">    
             <div >    
                
             <input id="Title"  placeholder="Title"/>  
               <input id="EmployeeName"  placeholder="EmployeeName"/>    
               <input id="EmployeeJob"  placeholder="EmployeeJob"/>    
               <button id="AddSPItem"  type="submit" >Add</button>    
               <button id="UpdateSPItem" type="submit" >Update</button>    
               <button id="DeleteSPItem"  type="submit" >Delete</button>  
             </div>    
           </div>    

           <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
           <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">  
             <div class="status"></div>  
             <ul class="items"><ul>  
           </div>  
         </div>  
       </form>   
        
    </div>    
    <br>    
    <div style="background-color: white" id="DivGetItems" />    
      
    </div>    
       
    `;

      this._renderListAsync();  
      this.AddEventListeners();     
  }


  private  AddSPItem(): void {  
      const body: string = JSON.stringify({  
        'Title': document.getElementById('Title')["value"],
        'EmployeeName' : document.getElementById('EmployeeName')["value"],    
        'EmployeeJob' : document.getElementById('EmployeeJob')["value"]  
      });  
      
      this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('Employee')/items`,  
      SPHttpClient.configurations.v1,  
      {  
        headers: {  
          'Accept': 'application/json;odata=nometadata',  
          'Content-type': 'application/json;odata=nometadata',  
          'odata-version': ''  
        },  
        body: body  
      })  
      .then((response: SPHttpClientResponse): Promise<ISPList> => {  
        return response.json();  
      });
    }  
      
    private updateStatus(status: string, items: ISPList[] = []): void {  
      this.domElement.querySelector('.status').innerHTML = status;  
      this.updateItemsHtml(items);  
    }  
      
    private updateItemsHtml(items: ISPList[]): void {  
      this.domElement.querySelector('.items').innerHTML = items.map(item => `<li>${item.Title} (${item.Id})</li>`).join("");  
    }  
  

  private UpdateSPItem(): void{
    var EmployeeId =  this.domElement.querySelector('input[name = "EmployeeId"]:checked')["value"];
    const body: string = JSON.stringify({  

        'Title': `Updated Item ${new Date()}`
      }); 

    this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('Employee')/items(${EmployeeId})`,  
        SPHttpClient.configurations.v1,  
        {  
          headers: {  
            'Accept': 'application/json;odata=nometadata',  
            'Content-type': 'application/json;odata=nometadata',  
            'odata-version': '',  
            'IF-MATCH': '*',  
            'X-HTTP-Method': 'MERGE'  
          },  
          body: body  
  }).then((response: SPHttpClientResponse): void => {  
          this.updateStatus(`Item with ID: ${EmployeeId } successfully updated`);  
        }, (error: any): void => {  
          this.updateStatus(`Error updating item: ${error}`);  
        }); 
  }
  private DeleteSPItem(): void {
    var EmployeeId =  this.domElement.querySelector('input[name = "EmployeeId"]:checked')["value"]; 
     this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('Employee')/items(${EmployeeId})`,  
            SPHttpClient.configurations.v1,  
            {  
              headers: {  
                'Accept': 'application/json;odata=verbose',  
                'Content-type': 'application/json;odata=verbose',  
                'odata-version': '',  
                'IF-MATCH': "*",  
                'X-HTTP-Method': 'DELETE'  
              }  
            });
                    

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
