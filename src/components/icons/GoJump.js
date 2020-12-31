import React from "react";
import cx from 'clsx';
import { ReactComponent as GoJumpSymbolic } from '../../assets/icons/go-jump-symbolic.svg';

function GoJump({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoJumpSymbolic)}
    </span>
  );
}

export default GoJump;
