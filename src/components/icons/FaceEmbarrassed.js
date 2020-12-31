import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceEmbarrassedSymbolic } from '../../assets/icons/face-embarrassed-symbolic.svg';

function FaceEmbarrassed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceEmbarrassedSymbolic)}
    </span>
  );
}

export default FaceEmbarrassed;
