import React from "react";
import cx from 'clsx';
import { ReactComponent as FacePlainSymbolic } from '../../assets/icons/face-plain-symbolic.svg';

function FacePlain({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FacePlainSymbolic)}
    </span>
  );
}

export default FacePlain;
