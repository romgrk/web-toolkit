import React from "react";
import cx from 'clsx';
import { ReactComponent as EyeNotLookingSymbolic } from '../../assets/icons/eye-not-looking-symbolic.svg';

function EyeNotLooking({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EyeNotLookingSymbolic)}
    </span>
  );
}

export default EyeNotLooking;
