import * as React from 'react';
export interface ITopMenuprops {
    pnpterms: any[];
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
}
export default class TopMenu extends React.Component<ITopMenuprops, ITopMenuState> {
    constructor(props: any);
    private getTermSetAsTree;
    componentDidMount(): void;
    render(): React.ReactElement<ITopMenuprops>;
}
//# sourceMappingURL=TopMenu.d.ts.map