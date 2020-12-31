import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderOpenSymbolic } from '../../assets/icons/folder-open-symbolic.svg';

function FolderOpen({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderOpenSymbolic)}
    </span>
  );
}

export default FolderOpen;
