import React from "react";
import cx from 'clsx';
import { ReactComponent as InsertObjectSymbolic } from '../../assets/icons/insert-object-symbolic.svg';

function InsertObject({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InsertObjectSymbolic)}
    </span>
  );
}

export default InsertObject;
