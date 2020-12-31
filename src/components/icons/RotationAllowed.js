import React from "react";
import cx from 'clsx';
import { ReactComponent as RotationAllowedSymbolic } from '../../assets/icons/rotation-allowed-symbolic.svg';

function RotationAllowed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(RotationAllowedSymbolic)}
    </span>
  );
}

export default RotationAllowed;
