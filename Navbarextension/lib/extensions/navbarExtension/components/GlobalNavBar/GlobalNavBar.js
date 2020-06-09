var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import styles from '../../NavbarExtensionApplicationCustomizer.module.scss';
var GlobalNavBar = /** @class */ (function (_super) {
    __extends(GlobalNavBar, _super);
    /**
    * Main constructor for the component
    */
    function GlobalNavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    GlobalNavBar.prototype.projectMenuItem = function (menuItem, itemType) {
        var _this = this;
        return ({
            key: menuItem.identity,
            name: menuItem.name,
            itemType: itemType,
            href: menuItem.terms.length == 0 ?
                (menuItem.localCustomProperties["_Sys_Nav_SimpleLinkUrl"] != undefined ?
                    menuItem.localCustomProperties["_Sys_Nav_SimpleLinkUrl"]
                    : null)
                : null,
            subMenuProps: menuItem.terms.length > 0 ?
                { items: menuItem.terms.map(function (i) { return (_this.projectMenuItem(i, ContextualMenuItemType.Normal)); }) }
                : null,
            isSubMenu: itemType != ContextualMenuItemType.Header,
        });
    };
    GlobalNavBar.prototype.render = function () {
        var _this = this;
        var commandBarItems = this.props.menuItems.map(function (i) {
            return (_this.projectMenuItem(i, ContextualMenuItemType.Header));
        });
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", { className: styles.top },
                React.createElement(CommandBar, { className: styles.commandBar, items: commandBarItems }))));
    };
    return GlobalNavBar;
}(React.Component));
export default GlobalNavBar;
//# sourceMappingURL=GlobalNavBar.js.map