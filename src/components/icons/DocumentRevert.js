import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentRevertSymbolic } from '../../assets/icons/document-revert-symbolic.svg';

function DocumentRevert({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentRevertSymbolic)}
    </span>
  );
}

export default DocumentRevert;
