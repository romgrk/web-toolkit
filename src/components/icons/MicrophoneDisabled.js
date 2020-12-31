import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneDisabledSymbolic } from '../../assets/icons/microphone-disabled-symbolic.svg';

function MicrophoneDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneDisabledSymbolic)}
    </span>
  );
}

export default MicrophoneDisabled;
