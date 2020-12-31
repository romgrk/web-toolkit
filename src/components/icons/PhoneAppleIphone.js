import React from "react";
import cx from 'clsx';
import { ReactComponent as PhoneAppleIphoneSymbolic } from '../../assets/icons/phone-apple-iphone-symbolic.svg';

function PhoneAppleIphone({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PhoneAppleIphoneSymbolic)}
    </span>
  );
}

export default PhoneAppleIphone;
