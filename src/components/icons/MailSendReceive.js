import React from "react";
import cx from 'clsx';
import { ReactComponent as MailSendReceiveSymbolic } from '../../assets/icons/mail-send-receive-symbolic.svg';

function MailSendReceive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailSendReceiveSymbolic)}
    </span>
  );
}

export default MailSendReceive;
