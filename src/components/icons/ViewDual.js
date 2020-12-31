import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewDualSymbolic } from '../../assets/icons/view-dual-symbolic.svg';

function ViewDual({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewDualSymbolic)}
    </span>
  );
}

export default ViewDual;
