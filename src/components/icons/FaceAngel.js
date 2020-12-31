import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceAngelSymbolic } from '../../assets/icons/face-angel-symbolic.svg';

function FaceAngel({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceAngelSymbolic)}
    </span>
  );
}

export default FaceAngel;
