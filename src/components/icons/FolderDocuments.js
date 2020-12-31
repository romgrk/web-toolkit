import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderDocumentsSymbolic } from '../../assets/icons/folder-documents-symbolic.svg';

function FolderDocuments({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderDocumentsSymbolic)}
    </span>
  );
}

export default FolderDocuments;
