import React from "react";
import cx from 'clsx';
import { ReactComponent as FormatTextDirectionRtlSymbolic } from '../../assets/icons/format-text-direction-symbolic-rtl.svg';

function FormatTextDirectionRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FormatTextDirectionRtlSymbolic)}
    </span>
  );
}

export default FormatTextDirectionRtl;
