import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewRestoreSymbolic } from '../../assets/icons/view-restore-symbolic.svg';

function ViewRestore({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewRestoreSymbolic)}
    </span>
  );
}

export default ViewRestore;
