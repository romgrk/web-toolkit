import React from "react";
import cx from 'clsx';
import { ReactComponent as ContactNewSymbolic } from '../../assets/icons/contact-new-symbolic.svg';

function ContactNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ContactNewSymbolic)}
    </span>
  );
}

export default ContactNew;
