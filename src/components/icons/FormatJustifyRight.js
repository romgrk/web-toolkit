import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatJustifyRightSymbolic } from '../../assets/icons/format-justify-right-symbolic.svg';

function FormatJustifyRight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatJustifyRightSymbolic)}
    </span>
  );
}

export default FormatJustifyRight;
