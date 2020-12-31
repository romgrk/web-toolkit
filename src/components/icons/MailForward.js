import React from "react";
import cx from 'clsx';
import { ReactComponent as MailForwardSymbolic } from '../../assets/icons/mail-forward-symbolic.svg';

function MailForward({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailForwardSymbolic)}
    </span>
  );
}

export default MailForward;
