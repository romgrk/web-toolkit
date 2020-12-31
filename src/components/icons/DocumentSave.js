import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentSaveSymbolic } from '../../assets/icons/document-save-symbolic.svg';

function DocumentSave({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentSaveSymbolic)}
    </span>
  );
}

export default DocumentSave;
