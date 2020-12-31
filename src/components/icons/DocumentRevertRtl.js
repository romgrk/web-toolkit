import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentRevertRtlSymbolic } from '../../assets/icons/document-revert-symbolic-rtl.svg';

function DocumentRevertRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentRevertRtlSymbolic)}
    </span>
  );
}

export default DocumentRevertRtl;
