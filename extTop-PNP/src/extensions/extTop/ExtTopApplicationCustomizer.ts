import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import TopMenu, {ITopMenuprops} from './components/TopMenu';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {sp } from '@pnp/sp';
 import { taxonomy, ITermStore, ITermSet, ITerms, ITermData, ITerm,Session, Term } from "@pnp/sp-taxonomy";
import { Dialog } from '@microsoft/sp-dialog';
import styles from './AppCustomizer.module.scss';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
 	import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'ExtTopApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ExtTopApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IExtTopApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  TopTermSetId: string;
  BottomTermSetId: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ExtTopApplicationCustomizer
  extends BaseApplicationCustomizer<IExtTopApplicationCustomizerProperties> {
    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    return super.onInit().then(_ => {

      sp.setup({
        spfxContext:this.context
      });
      this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
      this._renderPlaceHolders();
    });

    
    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    //return Promise.resolve();
  }

  private _renderPlaceHolders(){
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
        let TopTermSetId: string = this.properties.TopTermSetId;
        if (!TopTermSetId) {
          TopTermSetId = "(Top property was not defined.)";
        }

        if (this._topPlaceholder.domElement) {
          
          const element: React.ReactElement<ITopMenuprops> = React.createElement(
            TopMenu,{

              TopterSetId:this.properties.TopTermSetId
            }            
          );
          ReactDom.render(element,this._topPlaceholder.domElement);
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
    this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Bottom);

    // The extension should not assume that the expected placeholder is available.
    if (!this._bottomPlaceholder) {
      console.error("The expected placeholder (Bottom) was not found.");
      return;
    }

    if (this.properties) {
      let BottomTermSetId: string = this.properties.BottomTermSetId;
      if (!BottomTermSetId) {
        BottomTermSetId = "(Bottom property was not defined.)";
      }

      if (this._bottomPlaceholder.domElement) {
        this._bottomPlaceholder.domElement.innerHTML = `
        <div class="${styles.app}">
          <div class="${styles.bottom}">
            <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
              BottomTermSetId
            )}
          </div>
        </div>`;
      }
    }
  }
}

}
