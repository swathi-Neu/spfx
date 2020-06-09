import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
//import * as $ from 'jquery';
import * as strings from 'SpfxcssApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SpfxcssApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxcssApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  cssurl: string;
  pagecss: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxcssApplicationCustomizer
  extends BaseApplicationCustomizer<ISpfxcssApplicationCustomizerProperties> {

    private _externalJsUrl: string = "https://neudesicresearch.sharepoint.com/Style%20Library/plugins/jquery.js";
    private _externalJsUrl1: string = "https://neudesicresearch.sharepoint.com/Style%20Library/test.js";
    //private _externalCss: string = "https://neudesicresearch.sharepoint.com/Style%20Library/pageStyles.css";

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);


    const cssUrl: string = this.properties.cssurl;
    const cssUrl1: string = this.properties.pagecss;
    
    if (cssUrl) {
        // inject the style sheet
        const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
        let customStyle: HTMLLinkElement = document.createElement("link");
        customStyle.href = cssUrl;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);
    }

    let scriptTag: HTMLScriptElement = document.createElement("script");
    scriptTag.src = this._externalJsUrl;
    scriptTag.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
    console.log(`Added jquery script link.`);



    let scriptTag1: HTMLScriptElement = document.createElement("script");
    scriptTag1.src = this._externalJsUrl1;
    scriptTag1.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(scriptTag1);
    console.log(`Added jquery script link.`);
    
    const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
        let customStyle: HTMLLinkElement = document.createElement("link");
        customStyle.href = cssUrl1;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }
}
