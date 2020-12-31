import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatIndentLessSymbolic } from '../../assets/icons/format-indent-less-symbolic.svg';

function FormatIndentLess({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatIndentLessSymbolic)}
    </span>
  );
}

export default FormatIndentLess;
