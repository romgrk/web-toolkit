import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewPinSymbolic } from '../../assets/icons/view-pin-symbolic.svg';

function ViewPin({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewPinSymbolic)}
    </span>
  );
}

export default ViewPin;
