import React from "react";
import cx from 'clsx';
import { ReactComponent as MailUnreadSymbolic } from '../../assets/icons/mail-unread-symbolic.svg';

function MailUnread({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailUnreadSymbolic)}
    </span>
  );
}

export default MailUnread;
