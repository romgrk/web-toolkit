import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextUnderlineSymbolic } from '../../assets/icons/format-text-underline-symbolic.svg';

function FormatTextUnderline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextUnderlineSymbolic)}
    </span>
  );
}

export default FormatTextUnderline;
