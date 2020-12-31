import React from "react";
import cx from 'clsx';
import { ReactComponent as ColorSelectSymbolic } from '../../assets/icons/color-select-symbolic.svg';

function ColorSelect({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ColorSelectSymbolic)}
    </span>
  );
}

export default ColorSelect;
