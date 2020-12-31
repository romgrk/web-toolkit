import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderDragAcceptSymbolic } from '../../assets/icons/folder-drag-accept-symbolic.svg';

function FolderDragAccept({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderDragAcceptSymbolic)}
    </span>
  );
}

export default FolderDragAccept;
