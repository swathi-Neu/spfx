import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface ISpfxCrudPnpWebPartProps {
    description: string;
}
export default class SpfxCrudPnpWebPart extends BaseClientSideWebPart<ISpfxCrudPnpWebPartProps> {
    onInit(): Promise<void>;
    private AddEventListeners;
    private _getSPItems;
    private getSPItems;
    private _renderList;
    render(): void;
    private AddSPItem;
    private UpdateSPItem;
    private DeleteSPItem;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxCrudPnpWebPart.d.ts.map