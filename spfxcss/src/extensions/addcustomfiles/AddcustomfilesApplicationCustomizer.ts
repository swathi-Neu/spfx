import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'AddcustomfilesApplicationCustomizerStrings';

const LOG_SOURCE: string = 'AddcustomfilesApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAddcustomfilesApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AddcustomfilesApplicationCustomizer
  extends BaseApplicationCustomizer<IAddcustomfilesApplicationCustomizerProperties> {
    //private _externalJsUrl: string = "https://neudesicresearch.sharepoint.com/Style%20Library/plugins/jquery.js";
    //private _externalJsUrl1: string = "https://neudesicresearch.sharepoint.com/Style%20Library/test.js";
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // let scriptTag: HTMLScriptElement = document.createElement("script");
    // scriptTag.src = this._externalJsUrl;
    // scriptTag.type = "text/javascript";
    // document.getElementsByTagName("head")[0].appendChild(scriptTag);
    // console.log(`Added jquery script link.`);
    
    // let scriptTag1: HTMLScriptElement = document.createElement("script");
    // scriptTag1.src = this._externalJsUrl1;
    // scriptTag1.type = "text/javascript";
    // document.getElementsByTagName("head")[0].appendChild(scriptTag1);
    // console.log(`Added custom js`);

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }
}
