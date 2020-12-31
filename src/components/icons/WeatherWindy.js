import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherWindySymbolic } from '../../assets/icons/weather-windy-symbolic.svg';

function WeatherWindy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherWindySymbolic)}
    </span>
  );
}

export default WeatherWindy;
