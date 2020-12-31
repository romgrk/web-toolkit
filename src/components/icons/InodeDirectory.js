import React from "react";
import cx from 'clsx';
import { ReactComponent as InodeDirectorySymbolic } from '../../assets/icons/inode-directory-symbolic.svg';

function InodeDirectory({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InodeDirectorySymbolic)}
    </span>
  );
}

export default InodeDirectory;
