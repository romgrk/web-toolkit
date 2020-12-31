import React from "react";
import cx from 'clsx';
import { ReactComponent as DaytimeSunsetSymbolic } from '../../assets/icons/daytime-sunset-symbolic.svg';

function DaytimeSunset({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DaytimeSunsetSymbolic)}
    </span>
  );
}

export default DaytimeSunset;
