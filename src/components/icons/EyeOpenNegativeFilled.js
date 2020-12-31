import React from "react";
import cx from 'clsx';
import { ReactComponent as EyeOpenNegativeFilledSymbolic } from '../../assets/icons/eye-open-negative-filled-symbolic.svg';

function EyeOpenNegativeFilled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EyeOpenNegativeFilledSymbolic)}
    </span>
  );
}

export default EyeOpenNegativeFilled;
