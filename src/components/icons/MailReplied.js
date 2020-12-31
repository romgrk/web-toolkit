import React from "react";
import cx from 'clsx';
import { ReactComponent as MailRepliedSymbolic } from '../../assets/icons/mail-replied-symbolic.svg';

function MailReplied({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailRepliedSymbolic)}
    </span>
  );
}

export default MailReplied;
