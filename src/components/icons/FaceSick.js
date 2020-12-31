import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSickSymbolic } from '../../assets/icons/face-sick-symbolic.svg';

function FaceSick({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSickSymbolic)}
    </span>
  );
}

export default FaceSick;
