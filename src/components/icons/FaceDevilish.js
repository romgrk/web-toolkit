import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceDevilishSymbolic } from '../../assets/icons/face-devilish-symbolic.svg';

function FaceDevilish({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceDevilishSymbolic)}
    </span>
  );
}

export default FaceDevilish;
