import React from "react";
import cx from 'clsx';
import { ReactComponent as MailMarkNotjunkSymbolic } from '../../assets/icons/mail-mark-notjunk-symbolic.svg';

function MailMarkNotjunk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailMarkNotjunkSymbolic)}
    </span>
  );
}

export default MailMarkNotjunk;
