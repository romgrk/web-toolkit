import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextBoldSymbolic } from '../../assets/icons/format-text-bold-symbolic.svg';

function FormatTextBold({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextBoldSymbolic)}
    </span>
  );
}

export default FormatTextBold;
