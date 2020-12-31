import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSadSymbolic } from '../../assets/icons/face-sad-symbolic.svg';

function FaceSad({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSadSymbolic)}
    </span>
  );
}

export default FaceSad;
