import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherStormSymbolic } from '../../assets/icons/weather-storm-symbolic.svg';

function WeatherStorm({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherStormSymbolic)}
    </span>
  );
}

export default WeatherStorm;
