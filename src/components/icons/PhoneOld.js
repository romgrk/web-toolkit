import React from "react";
import cx from 'clsx';
import { ReactComponent as PhoneOldSymbolic } from '../../assets/icons/phone-old-symbolic.svg';

function PhoneOld({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PhoneOldSymbolic)}
    </span>
  );
}

export default PhoneOld;
