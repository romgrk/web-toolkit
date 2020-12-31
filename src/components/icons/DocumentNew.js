import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentNewSymbolic } from '../../assets/icons/document-new-symbolic.svg';

function DocumentNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentNewSymbolic)}
    </span>
  );
}

export default DocumentNew;
