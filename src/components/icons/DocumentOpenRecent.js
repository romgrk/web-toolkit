import React from "react";
import cx from 'clsx';
import { ReactComponent as DocumentOpenRecentSymbolic } from '../../assets/icons/document-open-recent-symbolic.svg';

function DocumentOpenRecent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DocumentOpenRecentSymbolic)}
    </span>
  );
}

export default DocumentOpenRecent;
