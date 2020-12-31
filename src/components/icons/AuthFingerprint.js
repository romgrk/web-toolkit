import React from "react";
import cx from 'clsx';
import { ReactComponent as AuthFingerprintSymbolic } from '../../assets/icons/auth-fingerprint-symbolic.svg';

function AuthFingerprint({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AuthFingerprintSymbolic)}
    </span>
  );
}

export default AuthFingerprint;
