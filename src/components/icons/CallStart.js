import React from "react";
import cx from 'clsx';
import { ReactComponent as CallStartSymbolic } from '../../assets/icons/call-start-symbolic.svg';

function CallStart({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CallStartSymbolic)}
    </span>
  );
}

export default CallStart;
