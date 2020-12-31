import React from "react";
import cx from 'clsx';
import { ReactComponent as SidebarShowSymbolic } from '../../assets/icons/sidebar-show-symbolic.svg';

function SidebarShow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SidebarShowSymbolic)}
    </span>
  );
}

export default SidebarShow;
