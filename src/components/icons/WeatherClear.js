import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherClearSymbolic } from '../../assets/icons/weather-clear-symbolic.svg';

function WeatherClear({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherClearSymbolic)}
    </span>
  );
}

export default WeatherClear;
