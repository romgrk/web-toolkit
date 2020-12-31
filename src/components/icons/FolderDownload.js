import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderDownloadSymbolic } from '../../assets/icons/folder-download-symbolic.svg';

function FolderDownload({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderDownloadSymbolic)}
    </span>
  );
}

export default FolderDownload;
