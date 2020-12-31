import React from "react";
import cx from 'clsx';
import { ReactComponent as CheckboxMixedSymbolic } from '../../assets/icons/checkbox-mixed-symbolic.svg';

function CheckboxMixed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CheckboxMixedSymbolic)}
    </span>
  );
}

export default CheckboxMixed;
