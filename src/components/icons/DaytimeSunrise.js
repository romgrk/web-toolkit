import React from "react";
import cx from 'clsx';
import { ReactComponent as DaytimeSunriseSymbolic } from '../../assets/icons/daytime-sunrise-symbolic.svg';

function DaytimeSunrise({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DaytimeSunriseSymbolic)}
    </span>
  );
}

export default DaytimeSunrise;
