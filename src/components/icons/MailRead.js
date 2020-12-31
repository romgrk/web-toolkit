import React from "react";
import cx from 'clsx';
import { ReactComponent as MailReadSymbolic } from '../../assets/icons/mail-read-symbolic.svg';

function MailRead({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailReadSymbolic)}
    </span>
  );
}

export default MailRead;
