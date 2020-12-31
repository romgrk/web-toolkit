import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextDirectionSymbolic } from '../../assets/icons/format-text-direction-symbolic.svg';

function FormatTextDirection({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextDirectionSymbolic)}
    </span>
  );
}

export default FormatTextDirection;
