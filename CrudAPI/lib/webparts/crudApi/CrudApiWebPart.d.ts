import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ICrudApiWebPartProps {
    description: string;
}
export default class CrudApiWebPart extends BaseClientSideWebPart<ICrudApiWebPartProps> {
    private AddEventListeners;
    private _getListData;
    private _renderListAsync;
    private _renderList;
    render(): void;
    private AddSPItem;
    private updateStatus;
    private updateItemsHtml;
    private UpdateSPItem;
    private DeleteSPItem;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CrudApiWebPart.d.ts.map