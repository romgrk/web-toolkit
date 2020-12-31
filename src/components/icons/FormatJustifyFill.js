import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatJustifyFillSymbolic } from '../../assets/icons/format-justify-fill-symbolic.svg';

function FormatJustifyFill({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatJustifyFillSymbolic)}
    </span>
  );
}

export default FormatJustifyFill;
