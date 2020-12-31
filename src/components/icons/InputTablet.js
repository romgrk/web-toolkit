import React from "react";
import cx from 'clsx';
import { ReactComponent as InputTabletSymbolic } from '../../assets/icons/input-tablet-symbolic.svg';

function InputTablet({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputTabletSymbolic)}
    </span>
  );
}

export default InputTablet;
