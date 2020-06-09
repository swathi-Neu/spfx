import * as React from 'react';
import { ITermData, ITerm } from "@pnp/sp-taxonomy";
export interface ITopMenuprops {
    TopterSetId: string;
}
export interface IPTerm {
    parent?: string;
    id: string;
    name: string;
}
export interface ITermSetprops {
    name: string;
    id: string;
    terms: IPTerm[];
}
export interface ITopMenuState {
    terms: (ITermData & ITerm)[];
}
export default class TopMenu extends React.Component<ITopMenuprops, ITopMenuState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<ITopMenuprops>;
}
//# sourceMappingURL=PnpTopMenu.d.ts.map