import React from "react";
import cx from 'clsx';
import { ReactComponent as CheckboxCheckedSymbolic } from '../../assets/icons/checkbox-checked-symbolic.svg';

function CheckboxChecked({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CheckboxCheckedSymbolic)}
    </span>
  );
}

export default CheckboxChecked;
