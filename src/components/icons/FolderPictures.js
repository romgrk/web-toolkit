import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderPicturesSymbolic } from '../../assets/icons/folder-pictures-symbolic.svg';

function FolderPictures({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderPicturesSymbolic)}
    </span>
  );
}

export default FolderPictures;
