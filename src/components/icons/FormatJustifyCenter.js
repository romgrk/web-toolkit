import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatJustifyCenterSymbolic } from '../../assets/icons/format-justify-center-symbolic.svg';

function FormatJustifyCenter({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatJustifyCenterSymbolic)}
    </span>
  );
}

export default FormatJustifyCenter;
