import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderSavedSearchSymbolic } from '../../assets/icons/folder-saved-search-symbolic.svg';

function FolderSavedSearch({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderSavedSearchSymbolic)}
    </span>
  );
}

export default FolderSavedSearch;
