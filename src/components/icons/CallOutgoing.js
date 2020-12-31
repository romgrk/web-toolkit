import React from "react";
import cx from 'clsx';
import { ReactComponent as CallOutgoingSymbolic } from '../../assets/icons/call-outgoing-symbolic.svg';

function CallOutgoing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CallOutgoingSymbolic)}
    </span>
  );
}

export default CallOutgoing;
