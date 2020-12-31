import React from "react";
import cx from 'clsx';
import { ReactComponent as GoJumpRtlSymbolic } from '../../assets/icons/go-jump-symbolic-rtl.svg';

function GoJumpRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoJumpRtlSymbolic)}
    </span>
  );
}

export default GoJumpRtl;
