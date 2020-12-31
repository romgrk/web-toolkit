import React from "react";
import cx from 'clsx';
import { ReactComponent as MailMarkImportantSymbolic } from '../../assets/icons/mail-mark-important-symbolic.svg';

function MailMarkImportant({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailMarkImportantSymbolic)}
    </span>
  );
}

export default MailMarkImportant;
