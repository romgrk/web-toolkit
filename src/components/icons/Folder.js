import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderSymbolic } from '../../assets/icons/folder-symbolic.svg';

function Folder({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderSymbolic)}
    </span>
  );
}

export default Folder;
