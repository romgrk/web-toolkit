import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceCryingSymbolic } from '../../assets/icons/face-crying-symbolic.svg';

function FaceCrying({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceCryingSymbolic)}
    </span>
  );
}

export default FaceCrying;
