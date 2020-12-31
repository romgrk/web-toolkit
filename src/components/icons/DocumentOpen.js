import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentOpenSymbolic } from '../../assets/icons/document-open-symbolic.svg';

function DocumentOpen({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentOpenSymbolic)}
    </span>
  );
}

export default DocumentOpen;
