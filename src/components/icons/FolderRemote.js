import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderRemoteSymbolic } from '../../assets/icons/folder-remote-symbolic.svg';

function FolderRemote({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderRemoteSymbolic)}
    </span>
  );
}

export default FolderRemote;
