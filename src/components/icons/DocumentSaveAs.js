import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentSaveAsSymbolic } from '../../assets/icons/document-save-as-symbolic.svg';

function DocumentSaveAs({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentSaveAsSymbolic)}
    </span>
  );
}

export default DocumentSaveAs;
