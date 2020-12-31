import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewSortAscendingSymbolic } from '../../assets/icons/view-sort-ascending-symbolic.svg';

function ViewSortAscending({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewSortAscendingSymbolic)}
    </span>
  );
}

export default ViewSortAscending;
