import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IAzureCdnWebPartProps {
    description: string;
}
export default class AzureCdnWebPart extends BaseClientSideWebPart<IAzureCdnWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AzureCdnWebPart.d.ts.map