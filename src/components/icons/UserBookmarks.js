import React from "react";
import cx from 'clsx';
import { ReactComponent as UserBookmarksSymbolic } from '../../assets/icons/user-bookmarks-symbolic.svg';

function UserBookmarks({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserBookmarksSymbolic)}
    </span>
  );
}

export default UserBookmarks;
