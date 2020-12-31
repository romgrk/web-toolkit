import React from "react";
import cx from 'clsx';
import { ReactComponent as GoNextSymbolic } from '../../assets/icons/go-next-symbolic.svg';

function GoNext({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoNextSymbolic)}
    </span>
  );
}

export default GoNext;
