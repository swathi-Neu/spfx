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
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
var TopMenu = /** @class */ (function (_super) {
    __extends(TopMenu, _super);
    function TopMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //     public constructor(props){
    //     super();
    //     this.state = {terms:[]};
    //     }
    TopMenu.prototype.componentWillMount = function () {
        var _this = this;
        taxonomy.getDefaultSiteCollectionTermStore()
            .getTermSetById(this.props.terSetId)
            .terms.get().then(function (Allterms) {
            console.log(Allterms);
            var navItems = Allterms.map(function (term) {
                return {
                    href: term.LocalCustomProperties._Sys_Nav_TargetUrl,
                    title: term.Name,
                    name: term.Name
                };
            });
            _this.setState({ terms: navItems });
        });
    };
    TopMenu.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(CommandBar, { items: this.state.terms })));
    };
    return TopMenu;
}(React.Component));
export default TopMenu;
//# sourceMappingURL=TopMenu.js.map