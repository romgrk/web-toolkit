import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneHardwareDisabledSymbolic } from '../../assets/icons/microphone-hardware-disabled-symbolic.svg';

function MicrophoneHardwareDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneHardwareDisabledSymbolic)}
    </span>
  );
}

export default MicrophoneHardwareDisabled;
