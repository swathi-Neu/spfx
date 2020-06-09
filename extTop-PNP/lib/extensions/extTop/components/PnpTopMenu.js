var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { taxonomy } from "@pnp/sp-taxonomy";
import styles from '../AppCustomizer.module.scss';
var TopMenu = /** @class */ (function (_super) {
    __extends(TopMenu, _super);
    function TopMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { terms: [] };
        return _this;
    }
    /*
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        /*   */
    TopMenu.prototype.componentDidMount = function () {
        var _this = this;
        taxonomy.getDefaultSiteCollectionTermStore().getTermGroupById('962d9e2a-5cb1-42ae-8203-2f6199fccbfd')
            .termSets.get().then(function (alltermsets) {
            alltermsets.forEach(function (element) {
                var parenttermsets = alltermsets.filter(function (uniq) { return uniq.Id != element.Id; }).map(function (termset) {
                    return {
                        name: element.Name,
                        id: element.Id,
                    };
                });
                taxonomy.getDefaultSiteCollectionTermStore()
                    .getTermSetById(element.Id)
                    .terms.get().then(function (allterms) {
                    var navItems = allterms.map(function (term) {
                        return {
                            href: term.LocalCustomProperties._Sys_Nav_SimpleLinkUrl,
                            title: term.Name,
                            name: term.Name
                        };
                    });
                    // console.log(navItems);               
                    _this.setState({ terms: allterms });
                });
            });
        });
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
    };
    TopMenu.prototype.render = function () {
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
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", { className: styles.top }, this.state.terms.map(function (term) {
                return React.createElement("span", null,
                    React.createElement("a", { href: term.LocalCustomProperties._Sys_Nav_SimpleLinkUrl, target: "_blank" }, term.Name));
            }))));
    };
    return TopMenu;
}(React.Component));
export default TopMenu;
//# sourceMappingURL=PnpTopMenu.js.map