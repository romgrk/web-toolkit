import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficeDocumentSymbolic } from '../../assets/icons/x-office-document-symbolic.svg';

function XOfficeDocument({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficeDocumentSymbolic)}
    </span>
  );
}

export default XOfficeDocument;
