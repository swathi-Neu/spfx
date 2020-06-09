import { BaseFieldCustomizer, IFieldCustomizerCellEventParameters } from '@microsoft/sp-listview-extensibility';
/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFieldCustomizerFieldCustomizerProperties {
    sampleText?: string;
}
export default class FieldCustomizerFieldCustomizer extends BaseFieldCustomizer<IFieldCustomizerFieldCustomizerProperties> {
    onInit(): Promise<void>;
    onRenderCell(event: IFieldCustomizerCellEventParameters): void;
    onDisposeCell(event: IFieldCustomizerCellEventParameters): void;
}
//# sourceMappingURL=FieldCustomizerFieldCustomizer.d.ts.map