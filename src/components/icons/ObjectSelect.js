import React from "react";
import cx from 'clsx';
import { ReactComponent as ObjectSelectSymbolic } from '../../assets/icons/object-select-symbolic.svg';

function ObjectSelect({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ObjectSelectSymbolic)}
    </span>
  );
}

export default ObjectSelect;
