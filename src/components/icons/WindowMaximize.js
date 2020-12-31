import React from "react";
import cx from 'clsx';
import { ReactComponent as WindowMaximizeSymbolic } from '../../assets/icons/window-maximize-symbolic.svg';

function WindowMaximize({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WindowMaximizeSymbolic)}
    </span>
  );
}

export default WindowMaximize;
