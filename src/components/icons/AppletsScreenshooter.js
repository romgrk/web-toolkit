import React from "react";
import cx from 'clsx';
import { ReactComponent as AppletsScreenshooterSymbolic } from '../../assets/icons/applets-screenshooter-symbolic.svg';

function AppletsScreenshooter({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AppletsScreenshooterSymbolic)}
    </span>
  );
}

export default AppletsScreenshooter;
