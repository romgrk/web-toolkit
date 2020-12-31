import React from "react";
import cx from 'clsx';
import { ReactComponent as FindLocationSymbolic } from '../../assets/icons/find-location-symbolic.svg';

function FindLocation({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FindLocationSymbolic)}
    </span>
  );
}

export default FindLocation;
