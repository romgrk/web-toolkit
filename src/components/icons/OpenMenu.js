import React from "react";
import cx from 'clsx';
import { ReactComponent as OpenMenuSymbolic } from '../../assets/icons/open-menu-symbolic.svg';

function OpenMenu({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OpenMenuSymbolic)}
    </span>
  );
}

export default OpenMenu;
