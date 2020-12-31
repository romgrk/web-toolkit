import React from "react";
import cx from 'clsx';
import { ReactComponent as StarNewSymbolic } from '../../assets/icons/star-new-symbolic.svg';

function StarNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(StarNewSymbolic)}
    </span>
  );
}

export default StarNew;
