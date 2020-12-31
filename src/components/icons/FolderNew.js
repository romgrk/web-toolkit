import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderNewSymbolic } from '../../assets/icons/folder-new-symbolic.svg';

function FolderNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderNewSymbolic)}
    </span>
  );
}

export default FolderNew;
