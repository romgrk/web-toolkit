import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewRefreshSymbolic } from '../../assets/icons/view-refresh-symbolic.svg';

function ViewRefresh({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewRefreshSymbolic)}
    </span>
  );
}

export default ViewRefresh;
