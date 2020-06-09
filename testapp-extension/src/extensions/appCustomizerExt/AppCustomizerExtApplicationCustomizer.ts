import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import styles from './AppCustomizer.Module.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {sp } from '@pnp/sp';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
import { Dialog } from '@microsoft/sp-dialog';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'AppCustomizerExtApplicationCustomizerStrings';
import { taxonomy, ITermStore, ITermSet, ITerms, ITermData, ITerm,Session } from "@pnp/sp-taxonomy";
const LOG_SOURCE: string = 'AppCustomizerExtApplicationCustomizer';
import TopMenu, {ITopMenuprops}from './components/TopMenu';



export interface IPTerm {
  parent?: string;
  id: string;
  name: string;
}
 
export interface ITaxonomyPopulatorState {
  terms: IPTerm[];
}
 
export interface IAppCustomizerExtApplicationCustomizerProperties { 
  TermsetId: string;
  //Bottom: string;
  //cssurl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppCustomizerExtApplicationCustomizer
  extends BaseApplicationCustomizer<IAppCustomizerExtApplicationCustomizerProperties> {
 // These have been added
 private _topPlaceholder: PlaceholderContent | undefined;
 //private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    return super.onInit().then(_ => {

      sp.setup({
        spfxContext:this.context
      });
      this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
	
      return Promise.resolve<void>();
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
  }
  
  private _renderPlaceHolders(): void {
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ");

    

     		// Handling the top placeholder
 		if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top);

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      if (this.properties) {
        let topString: string = this.properties.TermsetId;
        //let logoString:string = this.properties.Logo;
        if (!topString) {
        topString = "(TermsetId property was not defined.)";
        }

        if (this._topPlaceholder.domElement) {
          const element: React.ReactElement<ITopMenuprops> = React.createElement(TopMenu,
            {
              terSetId : this.properties.TermsetId
            }
            );
            ReactDom.render(element,this._topPlaceholder.domElement);
        }
      }
    }
    
      }

}
