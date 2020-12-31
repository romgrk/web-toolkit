import React from "react";
import cx from 'clsx';
import { ReactComponent as MailMarkJunkSymbolic } from '../../assets/icons/mail-mark-junk-symbolic.svg';

function MailMarkJunk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailMarkJunkSymbolic)}
    </span>
  );
}

export default MailMarkJunk;
