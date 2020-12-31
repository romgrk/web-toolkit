import React from "react";
import cx from 'clsx';
import { ReactComponent as StarredSymbolic } from '../../assets/icons/starred-symbolic.svg';

function Starred({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(StarredSymbolic)}
    </span>
  );
}

export default Starred;
