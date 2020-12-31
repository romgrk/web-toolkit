import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextStrikethroughSymbolic } from '../../assets/icons/format-text-strikethrough-symbolic.svg';

function FormatTextStrikethrough({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextStrikethroughSymbolic)}
    </span>
  );
}

export default FormatTextStrikethrough;
