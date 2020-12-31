import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentPrintSymbolic } from '../../assets/icons/document-print-symbolic.svg';

function DocumentPrint({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentPrintSymbolic)}
    </span>
  );
}

export default DocumentPrint;
