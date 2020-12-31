import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderVisitingSymbolic } from '../../assets/icons/folder-visiting-symbolic.svg';

function FolderVisiting({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderVisitingSymbolic)}
    </span>
  );
}

export default FolderVisiting;
