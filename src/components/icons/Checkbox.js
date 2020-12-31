import React from "react";
import cx from 'clsx';
import { ReactComponent as CheckboxSymbolic } from '../../assets/icons/checkbox-symbolic.svg';

function Checkbox({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CheckboxSymbolic)}
    </span>
  );
}

export default Checkbox;
