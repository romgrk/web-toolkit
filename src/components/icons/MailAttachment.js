import React from "react";
import cx from 'clsx';
import { ReactComponent as MailAttachmentSymbolic } from '../../assets/icons/mail-attachment-symbolic.svg';

function MailAttachment({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MailAttachmentSymbolic)}
    </span>
  );
}

export default MailAttachment;
