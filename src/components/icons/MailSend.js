import React from "react";
import cx from 'clsx';
import { ReactComponent as MailSendSymbolic } from '../../assets/icons/mail-send-symbolic.svg';

function MailSend({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailSendSymbolic)}
    </span>
  );
}

export default MailSend;
