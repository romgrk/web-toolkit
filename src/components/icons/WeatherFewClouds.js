import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherFewCloudsSymbolic } from '../../assets/icons/weather-few-clouds-symbolic.svg';

function WeatherFewClouds({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherFewCloudsSymbolic)}
    </span>
  );
}

export default WeatherFewClouds;
