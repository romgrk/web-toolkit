import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceTiredSymbolic } from '../../assets/icons/face-tired-symbolic.svg';

function FaceTired({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceTiredSymbolic)}
    </span>
  );
}

export default FaceTired;
