import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceCoolSymbolic } from '../../assets/icons/face-cool-symbolic.svg';

function FaceCool({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceCoolSymbolic)}
    </span>
  );
}

export default FaceCool;
