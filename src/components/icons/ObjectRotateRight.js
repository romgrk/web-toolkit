import React from "react";
import cx from 'clsx';
import { ReactComponent as ObjectRotateRightSymbolic } from '../../assets/icons/object-rotate-right-symbolic.svg';

function ObjectRotateRight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ObjectRotateRightSymbolic)}
    </span>
  );
}

export default ObjectRotateRight;
