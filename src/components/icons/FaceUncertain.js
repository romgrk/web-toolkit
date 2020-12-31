import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceUncertainSymbolic } from '../../assets/icons/face-uncertain-symbolic.svg';

function FaceUncertain({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceUncertainSymbolic)}
    </span>
  );
}

export default FaceUncertain;
