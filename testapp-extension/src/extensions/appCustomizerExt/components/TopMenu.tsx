import * as React from 'react';

import {escape} from '@microsoft/sp-lodash-subset';
 import {sp } from '@pnp/sp';
 import { taxonomy, ITermStore, ITermSet, ITerms, ITermData, ITerm,Session, Term } from "@pnp/sp-taxonomy";
 import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';

export interface ITopMenuprops{
    terSetId: string;

}

export interface ITopMenuState{
    //terms: (ITermData & ITerm)[];
    terms: ICommandBarItemProps[];

}

export default class TopMenu extends React.Component<ITopMenuprops,ITopMenuState> {


    //     public constructor(props){

    //     super();
    //     this.state = {terms:[]};
    //     }

    public componentWillMount()
    {
        taxonomy.getDefaultSiteCollectionTermStore()
        .getTermSetById(this.props.terSetId)
        .terms.get().then(
            Allterms =>{
                console.log(Allterms);
                let navItems = Allterms.map(term =>{

                return {
                    href:term.LocalCustomProperties._Sys_Nav_TargetUrl,
                    title:term.Name,
                    name:term.Name
                } as ICommandBarItemProps;
                })
                this.setState({terms: navItems});

                
            }

        );
    }
public render(): React.ReactElement<ITopMenuprops>{
return(
    <div>

<CommandBar
        items={this.state.terms}
       
      />

        {/* {this.state.terms.map(term => {

                return <span><a href={term.LocalCustomProperties._Sys_Nav_TargetUrl}>{term.Name}</a></span>
        })} */}

    </div>
);

}

  }