import React from "react";
import cx from 'clsx';
import { ReactComponent as CallStopSymbolic } from '../../assets/icons/call-stop-symbolic.svg';

function CallStop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CallStopSymbolic)}
    </span>
  );
}

export default CallStop;
