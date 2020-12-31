import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentPageSetupSymbolic } from '../../assets/icons/document-page-setup-symbolic.svg';

function DocumentPageSetup({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentPageSetupSymbolic)}
    </span>
  );
}

export default DocumentPageSetup;
