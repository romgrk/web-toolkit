import React from "react";
import cx from 'clsx';
import { ReactComponent as DialogErrorSymbolic } from '../../assets/icons/dialog-error-symbolic.svg';

function DialogError({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DialogErrorSymbolic)}
    </span>
  );
}

export default DialogError;
