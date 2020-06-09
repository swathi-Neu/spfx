import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { escape } from '@microsoft/sp-lodash-subset';
import {IOrderList} from './IlistItems';
import styles from './SpfxCrudPnpWebPart.module.scss';
import * as strings from 'SpfxCrudPnpWebPartStrings';

export interface ISpfxCrudPnpWebPartProps {
  description: string;
}

export default class SpfxCrudPnpWebPart extends BaseClientSideWebPart<ISpfxCrudPnpWebPartProps> {

  public onInit(): Promise<void> {  
    return super.onInit().then(_ => {  
      sp.setup({  
        spfxContext: this.context  
      });  
    });  
  }
  private AddEventListeners() : void{    
   
    document.getElementById('AddSPItem').addEventListener('click',()=>this.AddSPItem());    
    document.getElementById('UpdateSPItem').addEventListener('click',()=>this.UpdateSPItem());    
    document.getElementById('DeleteSPItem').addEventListener('click',()=>this.DeleteSPItem());    
   }  

  private _getSPItems(): Promise<IOrderList[]> {    
    return sp.web.lists.getByTitle("Order").items.get().then((response) => {    
          
       return response;    
     });    
            
   }    
       
    private getSPItems(): void {    
          
       this._getSPItems()    
         .then((response) => {    
           this._renderList(response);    
         });    
   }    
       
   private _renderList(items: IOrderList[]): void {    
     let html: string = '<table class="TFtable" border=1 width=style="bordercollapse: collapse;">';    
     html += `<th></th><th>Id</th><th>Name</th><th>OrderNumber</th>`;    
     if (items.length>0)  
     {  
     items.forEach((item: IOrderList) => {    
       html += `    
            <tr>   
            <td>  <input type="radio" id="orderId" name="orderId" value="${item.Id}"> <br> </td>   
            
           <td>${item.Id}</td>    
           <td>${item.Title}</td>    
           <td>${item.OrderNumber}</td>    
           </tr>    
           `;     
     });    
    }  
    else    
    
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
   x;">Order Details using PNP</div>    
           
    </div>    
    <div style="background-color: white" >    
       <form >    
          <br>    
          <div data-role="header">    
             <h3>SharePoint List Items</h3>    
          </div>    
           <div data-role="main" class="ui-content">    
             <div >    
                
               
               <input id="Name"  placeholder="Name"/>    
               <input id="OrderNumber"  placeholder="OrderNumber"/>    
               <button id="AddSPItem"  type="submit" >Add</button>    
               <button id="UpdateSPItem" type="submit" >Update</button>    
               <button id="DeleteSPItem"  type="submit" >Delete</button>  
             </div>    
           </div>    
       </form>    
    </div>    
    <br>    
    <div style="background-color: white" id="DivGetItems" />    
      
    </div>    
       
    `;    
 this.getSPItems();   
 this.AddEventListeners();     
  }

  private AddSPItem()    
 {      
     
      sp.web.lists.getByTitle('Order').items.add({        
        ProfileName : document.getElementById('Name')["value"],    
        ProfileJob : document.getElementById('OrderNumber')["value"]  
         
     });   
   
      alert("Record with Order Name : "+ document.getElementById('Name')["value"] + " Added !");    
        
 }  
 
 private  UpdateSPItem()    
 {      
  var orderId =  this.domElement.querySelector('input[name = "orderId"]:checked')["value"];  
     sp.web.lists.getByTitle("Order").items.getById(orderId).update({    
      ProfileName : document.getElementById('Name')["value"],    
      ProfileJob : document.getElementById('OrderNumber')["value"]  
        
   });    
  alert("Record with Order ID : "+ orderId + " Updated !");    
 }    
     
private DeleteSPItem()    
 {      
  var orderId =  this.domElement.querySelector('input[name = "orderId"]:checked')["value"];  
    
      sp.web.lists.getByTitle("Order").items.getById(orderId).delete();    
      alert("Record with Order ID : "+ orderId + " Deleted !");    
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
