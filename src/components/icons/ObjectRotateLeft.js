import React from "react";
import cx from 'clsx';
import { ReactComponent as ObjectRotateLeftSymbolic } from '../../assets/icons/object-rotate-left-symbolic.svg';

function ObjectRotateLeft({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ObjectRotateLeftSymbolic)}
    </span>
  );
}

export default ObjectRotateLeft;
