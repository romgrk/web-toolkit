import React from "react";
import cx from 'clsx';
import { ReactComponent as PhoneSymbolic } from '../../assets/icons/phone-symbolic.svg';

function Phone({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PhoneSymbolic)}
    </span>
  );
}

export default Phone;
