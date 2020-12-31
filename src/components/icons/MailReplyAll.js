import React from "react";
import cx from 'clsx';
import { ReactComponent as MailReplyAllSymbolic } from '../../assets/icons/mail-reply-all-symbolic.svg';

function MailReplyAll({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailReplyAllSymbolic)}
    </span>
  );
}

export default MailReplyAll;
