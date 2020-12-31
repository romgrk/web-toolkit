import React from "react";
import cx from 'clsx';
import { ReactComponent as ObjectFlipHorizontalSymbolic } from '../../assets/icons/object-flip-horizontal-symbolic.svg';

function ObjectFlipHorizontal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ObjectFlipHorizontalSymbolic)}
    </span>
  );
}

export default ObjectFlipHorizontal;
