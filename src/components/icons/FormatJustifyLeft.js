import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatJustifyLeftSymbolic } from '../../assets/icons/format-justify-left-symbolic.svg';

function FormatJustifyLeft({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatJustifyLeftSymbolic)}
    </span>
  );
}

export default FormatJustifyLeft;
