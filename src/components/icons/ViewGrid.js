import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewGridSymbolic } from '../../assets/icons/view-grid-symbolic.svg';

function ViewGrid({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewGridSymbolic)}
    </span>
  );
}

export default ViewGrid;
