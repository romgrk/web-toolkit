import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherSevereAlertSymbolic } from '../../assets/icons/weather-severe-alert-symbolic.svg';

function WeatherSevereAlert({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherSevereAlertSymbolic)}
    </span>
  );
}

export default WeatherSevereAlert;
