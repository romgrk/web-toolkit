import React from "react";
import cx from 'clsx';
import { ReactComponent as NonStarredSymbolic } from '../../assets/icons/non-starred-symbolic.svg';

function NonStarred({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NonStarredSymbolic)}
    </span>
  );
}

export default NonStarred;
