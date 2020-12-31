import React from "react";
import cx from 'clsx';
import { ReactComponent as MailMessageNewSymbolic } from '../../assets/icons/mail-message-new-symbolic.svg';

function MailMessageNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailMessageNewSymbolic)}
    </span>
  );
}

export default MailMessageNew;
