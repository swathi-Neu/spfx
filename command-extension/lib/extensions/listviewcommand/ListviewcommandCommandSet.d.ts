import { BaseListViewCommandSet, IListViewCommandSetListViewUpdatedParameters, IListViewCommandSetExecuteEventParameters } from '@microsoft/sp-listview-extensibility';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IListviewcommandCommandSetProperties {
    sampleTextOne: string;
    sampleTextTwo: string;
}
export default class ListviewcommandCommandSet extends BaseListViewCommandSet<IListviewcommandCommandSetProperties> {
    onInit(): Promise<void>;
    onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void;
    onExecute(event: IListViewCommandSetExecuteEventParameters): void;
}
//# sourceMappingURL=ListviewcommandCommandSet.d.ts.map