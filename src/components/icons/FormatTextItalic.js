import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextItalicSymbolic } from '../../assets/icons/format-text-italic-symbolic.svg';

function FormatTextItalic({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextItalicSymbolic)}
    </span>
  );
}

export default FormatTextItalic;
