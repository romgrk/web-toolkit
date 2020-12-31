import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentPrintPreviewSymbolic } from '../../assets/icons/document-print-preview-symbolic.svg';

function DocumentPrintPreview({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentPrintPreviewSymbolic)}
    </span>
  );
}

export default DocumentPrintPreview;
