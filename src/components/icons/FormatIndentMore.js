import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatIndentMoreSymbolic } from '../../assets/icons/format-indent-more-symbolic.svg';

function FormatIndentMore({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatIndentMoreSymbolic)}
    </span>
  );
}

export default FormatIndentMore;
