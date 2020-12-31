import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewListSymbolic } from '../../assets/icons/view-list-symbolic.svg';

function ViewList({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewListSymbolic)}
    </span>
  );
}

export default ViewList;
