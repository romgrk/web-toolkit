import React from "react";
import cx from 'clsx';
import { ReactComponent as DialogPasswordSymbolic } from '../../assets/icons/dialog-password-symbolic.svg';

function DialogPassword({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DialogPasswordSymbolic)}
    </span>
  );
}

export default DialogPassword;
