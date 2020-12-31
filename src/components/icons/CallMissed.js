import React from "react";
import cx from 'clsx';
import { ReactComponent as CallMissedSymbolic } from '../../assets/icons/call-missed-symbolic.svg';

function CallMissed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CallMissedSymbolic)}
    </span>
  );
}

export default CallMissed;
