import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
export interface IPTerm {
    parent?: string;
    id: string;
    name: string;
}
export interface ITaxonomyPopulatorState {
    terms: IPTerm[];
}
export interface IAppCustomizerExtApplicationCustomizerProperties {
    TermsetId: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppCustomizerExtApplicationCustomizer extends BaseApplicationCustomizer<IAppCustomizerExtApplicationCustomizerProperties> {
    private _topPlaceholder;
    onInit(): Promise<void>;
    private _renderPlaceHolders;
}
//# sourceMappingURL=AppCustomizerExtApplicationCustomizer.d.ts.map