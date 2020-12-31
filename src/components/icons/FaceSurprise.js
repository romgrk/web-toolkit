import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSurpriseSymbolic } from '../../assets/icons/face-surprise-symbolic.svg';

function FaceSurprise({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSurpriseSymbolic)}
    </span>
  );
}

export default FaceSurprise;
