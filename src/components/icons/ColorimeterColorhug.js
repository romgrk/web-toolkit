import React from "react";
import cx from 'clsx';
import { ReactComponent as ColorimeterColorhugSymbolic } from '../../assets/icons/colorimeter-colorhug-symbolic.svg';

function ColorimeterColorhug({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ColorimeterColorhugSymbolic)}
    </span>
  );
}

export default ColorimeterColorhug;
