import React from "react";
import cx from 'clsx';
import { ReactComponent as WindowNewSymbolic } from '../../assets/icons/window-new-symbolic.svg';

function WindowNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WindowNewSymbolic)}
    </span>
  );
}

export default WindowNew;
