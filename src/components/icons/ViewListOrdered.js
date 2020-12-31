import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewListOrderedSymbolic } from '../../assets/icons/view-list-ordered-symbolic.svg';

function ViewListOrdered({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewListOrderedSymbolic)}
    </span>
  );
}

export default ViewListOrdered;
