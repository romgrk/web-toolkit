import React from "react";
import cx from 'clsx';
import { ReactComponent as DisplayProjectorSymbolic } from '../../assets/icons/display-projector-symbolic.svg';

function DisplayProjector({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DisplayProjectorSymbolic)}
    </span>
  );
}

export default DisplayProjector;
