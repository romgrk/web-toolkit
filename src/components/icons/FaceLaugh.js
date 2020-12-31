import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceLaughSymbolic } from '../../assets/icons/face-laugh-symbolic.svg';

function FaceLaugh({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceLaughSymbolic)}
    </span>
  );
}

export default FaceLaugh;
