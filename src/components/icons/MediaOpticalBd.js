import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaOpticalBdSymbolic } from '../../assets/icons/media-optical-bd-symbolic.svg';

function MediaOpticalBd({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaOpticalBdSymbolic)}
    </span>
  );
}

export default MediaOpticalBd;
