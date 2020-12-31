import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherShowersSymbolic } from '../../assets/icons/weather-showers-symbolic.svg';

function WeatherShowers({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherShowersSymbolic)}
    </span>
  );
}

export default WeatherShowers;
