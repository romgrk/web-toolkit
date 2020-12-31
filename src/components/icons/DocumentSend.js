import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentSendSymbolic } from '../../assets/icons/document-send-symbolic.svg';

function DocumentSend({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentSendSymbolic)}
    </span>
  );
}

export default DocumentSend;
