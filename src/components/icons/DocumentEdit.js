import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentEditSymbolic } from '../../assets/icons/document-edit-symbolic.svg';

function DocumentEdit({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentEditSymbolic)}
    </span>
  );
}

export default DocumentEdit;
