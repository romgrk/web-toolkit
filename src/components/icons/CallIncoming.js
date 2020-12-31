import React from "react";
import cx from 'clsx';
import { ReactComponent as CallIncomingSymbolic } from '../../assets/icons/call-incoming-symbolic.svg';

function CallIncoming({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CallIncomingSymbolic)}
    </span>
  );
}

export default CallIncoming;
