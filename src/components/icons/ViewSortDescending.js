import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewSortDescendingSymbolic } from '../../assets/icons/view-sort-descending-symbolic.svg';

function ViewSortDescending({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewSortDescendingSymbolic)}
    </span>
  );
}

export default ViewSortDescending;
