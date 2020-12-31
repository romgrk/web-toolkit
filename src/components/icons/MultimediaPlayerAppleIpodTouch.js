import React from "react";
import cx from 'clsx';
import { ReactComponent as MultimediaPlayerAppleIpodTouchSymbolic } from '../../assets/icons/multimedia-player-apple-ipod-touch-symbolic.svg';

function MultimediaPlayerAppleIpodTouch({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MultimediaPlayerAppleIpodTouchSymbolic)}
    </span>
  );
}

export default MultimediaPlayerAppleIpodTouch;
