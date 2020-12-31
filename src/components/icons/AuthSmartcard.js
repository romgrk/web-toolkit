import React from "react";
import cx from 'clsx';
import { ReactComponent as AuthSmartcardSymbolic } from '../../assets/icons/auth-smartcard-symbolic.svg';

function AuthSmartcard({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AuthSmartcardSymbolic)}
    </span>
  );
}

export default AuthSmartcard;
