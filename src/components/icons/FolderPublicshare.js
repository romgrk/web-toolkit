import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderPublicshareSymbolic } from '../../assets/icons/folder-publicshare-symbolic.svg';

function FolderPublicshare({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderPublicshareSymbolic)}
    </span>
  );
}

export default FolderPublicshare;
