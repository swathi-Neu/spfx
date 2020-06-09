import * as React from 'react';
import { Markup } from 'interweave';
import {sp, Item } from '@pnp/sp';
import {escape} from '@microsoft/sp-lodash-subset';
import { taxonomy, ITermGroup,ITermStore,ITermGroupData,ITermStoreData, ITermSet,ITermSetData,ITermSets, ITerms, ITermData, ITerm,Session, Term, Terms } from "@pnp/sp-taxonomy";
import { CommandBar, ICommandBarItemProps,ICommandBarProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IContextualMenuItem, ContextualMenuItemType } 
from 'office-ui-fabric-react/lib/ContextualMenu';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';

import styles from '../AppCustomizer.module.scss';


export interface ITopMenuprops{
   //TopterSetId: string;
   pnpterms:any[];

}

export interface IPTerm {
    parent?: string;
    id: string;
    name: string;
    //href:string;
  }

  export interface ITermSetprops{
  name: string;
  id:string;
  terms: IPTerm[];

  }
export interface ITopMenuState{
   // terms: IPTerm[];  
       

    //terms: (ITermData & ITerm)[];
    //terms: ICommandBarItemProps[];

}





export default class TopMenu extends React.Component<ITopMenuprops,ITopMenuState> {


    
    public constructor(props){
            super(props);
            this.state = {


            };
            
    }


private async getTermSetAsTree(): Promise<any> {   
        const store: ITermStore = await taxonomy.termStores.getByName("Taxonomy_qEIibS2IxxLnnZSZtsxUCw==");
        const setWithData =      store.getTermSetById('bfb91e02-5151-4cab-bb21-7c46f71f2feb');
        
       // All terms
       
        const terms = await setWithData.terms.get();
        let actualTerms = [];
        let tree = { term: terms,
                     children: [] };
    
        // Loop through each term
        terms.forEach(trm => {
            var currentTerm = trm;
            var currentTermPath = currentTerm.PathOfTerm.split(';');
            var children = tree.children;
    
            // Loop through each part of the path
            for (var i = 0; i < currentTermPath.length; i++) {
                var foundNode = false;
    
                for (var j = 0; j < children.length; j++) {
                    if (children[j].name === currentTermPath[i]) {
                        foundNode = true;
                        break;
                    }
                }
    
                // Select the node, otherwise create a new one
                var term = foundNode ? children[j] : { name: currentTermPath[i], children: [] };
    
                // If we're a child element, add the term properties
                if (i === currentTermPath.length - 1) {
                    term.term = currentTerm;
                    term.title = currentTerm.Name;
                    term.guid = currentTerm.Id.toString();
                }
    
                // If the node did exist, let's look there next iteration
                if (foundNode) {
                    children = term.children;
                }
                // If the segment of path does not exist, create it
                else {
                    children.push(term);
    
                    // Reset the children pointer to add there next iteration
                    if (i !== currentTermPath.length - 1) {
                        children = term.children;

                    }
                }
            }
        })
   const itemsArray = tree.children; 
   return (this.getTermSetAsTree())
   
    }
    

    public  componentDidMount()
    {

        this.getTermSetAsTree();
        

    }


public render():React.ReactElement<ITopMenuprops>{
    

    return (



        <div className={styles.app}>
            <div className={styles.top}>
             {/* <div>
            <CommandBar
        items={this.state.terms}
       
      /> */}
          
        <span>Hello</span>

               


 </div>
        </div> 
   );
}

}

