import React from "react";
import cx from 'clsx';
import { ReactComponent as InsertImageSymbolic } from '../../assets/icons/insert-image-symbolic.svg';

function InsertImage({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InsertImageSymbolic)}
    </span>
  );
}

export default InsertImage;
