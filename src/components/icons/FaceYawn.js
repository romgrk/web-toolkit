import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceYawnSymbolic } from '../../assets/icons/face-yawn-symbolic.svg';

function FaceYawn({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceYawnSymbolic)}
    </span>
  );
}

export default FaceYawn;
