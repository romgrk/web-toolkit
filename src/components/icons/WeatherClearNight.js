import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherClearNightSymbolic } from '../../assets/icons/weather-clear-night-symbolic.svg';

function WeatherClearNight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherClearNightSymbolic)}
    </span>
  );
}

export default WeatherClearNight;
