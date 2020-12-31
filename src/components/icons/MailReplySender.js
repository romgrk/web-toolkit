import React from "react";
import cx from 'clsx';
import { ReactComponent as MailReplySenderSymbolic } from '../../assets/icons/mail-reply-sender-symbolic.svg';

function MailReplySender({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailReplySenderSymbolic)}
    </span>
  );
}

export default MailReplySender;
