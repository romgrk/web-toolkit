import React from "react";
import cx from 'clsx';
import { ReactComponent as SidebarHideSymbolic } from '../../assets/icons/sidebar-hide-symbolic.svg';

function SidebarHide({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SidebarHideSymbolic)}
    </span>
  );
}

export default SidebarHide;
