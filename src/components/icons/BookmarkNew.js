import React from "react";
import cx from 'clsx';
import { ReactComponent as BookmarkNewSymbolic } from '../../assets/icons/bookmark-new-symbolic.svg';

function BookmarkNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BookmarkNewSymbolic)}
    </span>
  );
}

export default BookmarkNew;
