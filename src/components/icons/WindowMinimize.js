import React from "react";
import cx from 'clsx';
import { ReactComponent as WindowMinimizeSymbolic } from '../../assets/icons/window-minimize-symbolic.svg';

function WindowMinimize({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WindowMinimizeSymbolic)}
    </span>
  );
}

export default WindowMinimize;
