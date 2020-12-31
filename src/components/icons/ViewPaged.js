import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewPagedSymbolic } from '../../assets/icons/view-paged-symbolic.svg';

function ViewPaged({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewPagedSymbolic)}
    </span>
  );
}

export default ViewPaged;
