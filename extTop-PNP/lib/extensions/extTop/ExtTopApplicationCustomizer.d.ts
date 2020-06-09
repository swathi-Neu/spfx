import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IExtTopApplicationCustomizerProperties {
    testMessage: string;
    TopTermSetId: string;
    BottomTermSetId: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class ExtTopApplicationCustomizer extends BaseApplicationCustomizer<IExtTopApplicationCustomizerProperties> {
    private _topPlaceholder;
    private _bottomPlaceholder;
    onInit(): Promise<void>;
    private _renderPlaceHolders;
}
//# sourceMappingURL=ExtTopApplicationCustomizer.d.ts.map