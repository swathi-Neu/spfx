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
    TopterSetId: string;

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

    terms: (ITermData & ITerm)[];
    //terms: ICommandBarItemProps[];

}





export default class TopMenu extends React.Component<ITopMenuprops,ITopMenuState> {


    
    public constructor(props){
            super(props);
            this.state = {terms:[]};
    }


/*















    /*   */


    public componentDidMount()
    {

        taxonomy.getDefaultSiteCollectionTermStore().getTermGroupById('962d9e2a-5cb1-42ae-8203-2f6199fccbfd')
        .termSets.get().then(alltermsets => {

        
            alltermsets.forEach(element => {
                let parenttermsets = alltermsets.filter(uniq => uniq.Id != element.Id).map(termset =>{
                    return{
                        name:element.Name,
                        id:element.Id,
                    }
            
               });
                            taxonomy.getDefaultSiteCollectionTermStore()
                            .getTermSetById(element.Id)
                            .terms.get().then(allterms => {   
                                           
                            let navItems = allterms.map(term =>{

                                            return {
                                                href:term.LocalCustomProperties._Sys_Nav_SimpleLinkUrl,
                                                title:term.Name,
                                                name:term.Name
                                            } as ICommandBarItemProps;
                                            });
                            // console.log(navItems);               
                            this.setState({terms: allterms});
                            
                         
        }
        );
       
        });
        })
        

        // taxonomy.getDefaultSiteCollectionTermStore()
        // .getTermSetById(this.props.TopterSetId)
        // .terms.get().then(
        //     Allterms => {
        //         console.log(Allterms);

        //         let navItems = Allterms.map(term =>{

        //                         return {
        //                             href:term.LocalCustomProperties._Sys_Nav_TargetUrl,
        //                             title:term.Name,
        //                             name:term.Name
        //                         } as ICommandBarItemProps;
        //                         });
        //         this.setState({terms: Allterms});

//                 return {
//                     href:term.LocalCustomProperties._Sys_Nav_SimpleLinkUrl,
//                     title:term.Name,
//                     name:term.Name
//                 } as ICommandBarItemProps;
//                 });
// this.setState({terms: navItems});


           // }
       // );
    }


public render():React.ReactElement<ITopMenuprops>{


    // let termrow = this.state.terms.map((t: IPTerm) => {
    //     return <tr><td>prasanna</td></tr>;
    //   });  

    //   return (      
    //     <div>        
    //     <div>          
    //     <div >            
    //     <div>
    //                   <span>Terms from TermStore</span>
    //                 </div>
    //               </div>          
    //     <table>        
    //     <thead><tr><th>Name</th><th>Id</th><th>Parent</th></tr></thead>            
    //     <tbody>{termrow} </tbody>
    //               </table>
    //             </div>
    //           </div>);
    //       } 
    //     }


    return (



        <div className={styles.app}>
            <div className={styles.top}>
             {/* <div>
            <CommandBar
        items={this.state.terms}
       
      /> */}
          
                  {this.state.terms.map(term => {                  
                return <span><a href={term.LocalCustomProperties._Sys_Nav_SimpleLinkUrl} target="_blank">{term.Name}</a></span>
                 })} 

               


 </div>
        </div> 
   );
}

}

