import React from "react";
import cx from 'clsx';
import { ReactComponent as ObjectFlipVerticalSymbolic } from '../../assets/icons/object-flip-vertical-symbolic.svg';

function ObjectFlipVertical({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ObjectFlipVerticalSymbolic)}
    </span>
  );
}

export default ObjectFlipVertical;
