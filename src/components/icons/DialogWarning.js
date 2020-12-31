import React from "react";
import cx from 'clsx';
import { ReactComponent as DialogWarningSymbolic } from '../../assets/icons/dialog-warning-symbolic.svg';

function DialogWarning({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DialogWarningSymbolic)}
    </span>
  );
}

export default DialogWarning;
