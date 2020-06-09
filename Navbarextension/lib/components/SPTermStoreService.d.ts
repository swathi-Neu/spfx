import { SPHttpClient } from '@microsoft/sp-http';
export interface ISPTermStoreServiceConfiguration {
    spHttpClient: SPHttpClient;
    siteAbsoluteUrl: string;
}
export interface ISPTermObject {
    identity: string;
    isAvailableForTagging: boolean;
    name: string;
    guid: string;
    customSortOrder: string;
    terms: ISPTermObject[];
    localCustomProperties: any;
}
export declare class SPTermStoreService {
    private spHttpClient;
    private siteAbsoluteUrl;
    private formDigest;
    constructor(config: ISPTermStoreServiceConfiguration);
    getTermsFromTermSetAsync(termSetName: string): Promise<ISPTermObject[]>;
    private getChildTermsAsync;
    private projectTermAsync;
    private cleanGuid;
}
//# sourceMappingURL=SPTermStoreService.d.ts.map