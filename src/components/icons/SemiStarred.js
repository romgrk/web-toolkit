import React from "react";
import cx from 'clsx';
import { ReactComponent as SemiStarredSymbolic } from '../../assets/icons/semi-starred-symbolic.svg';

function SemiStarred({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SemiStarredSymbolic)}
    </span>
  );
}

export default SemiStarred;
