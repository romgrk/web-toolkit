import React from "react";
import cx from 'clsx';
import { ReactComponent as RotationLockedSymbolic } from '../../assets/icons/rotation-locked-symbolic.svg';

function RotationLocked({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(RotationLockedSymbolic)}
    </span>
  );
}

export default RotationLocked;
