import React from "react";
import cx from 'clsx';
import { ReactComponent as MarkLocationSymbolic } from '../../assets/icons/mark-location-symbolic.svg';

function MarkLocation({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MarkLocationSymbolic)}
    </span>
  );
}

export default MarkLocation;
