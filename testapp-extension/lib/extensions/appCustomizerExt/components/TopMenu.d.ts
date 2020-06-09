import * as React from 'react';
import { ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
export interface ITopMenuprops {
    terSetId: string;
}
export interface ITopMenuState {
    terms: ICommandBarItemProps[];
}
export default class TopMenu extends React.Component<ITopMenuprops, ITopMenuState> {
    componentWillMount(): void;
    render(): React.ReactElement<ITopMenuprops>;
}
//# sourceMappingURL=TopMenu.d.ts.map