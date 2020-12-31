import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentPropertiesSymbolic } from '../../assets/icons/document-properties-symbolic.svg';

function DocumentProperties({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentPropertiesSymbolic)}
    </span>
  );
}

export default DocumentProperties;
