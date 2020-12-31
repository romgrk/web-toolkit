import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderTemplatesSymbolic } from '../../assets/icons/folder-templates-symbolic.svg';

function FolderTemplates({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderTemplatesSymbolic)}
    </span>
  );
}

export default FolderTemplates;
