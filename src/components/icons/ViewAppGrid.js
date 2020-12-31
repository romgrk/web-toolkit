import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewAppGridSymbolic } from '../../assets/icons/view-app-grid-symbolic.svg';

function ViewAppGrid({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewAppGridSymbolic)}
    </span>
  );
}

export default ViewAppGrid;
