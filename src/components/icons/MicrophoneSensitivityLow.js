import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneSensitivityLowSymbolic } from '../../assets/icons/microphone-sensitivity-low-symbolic.svg';

function MicrophoneSensitivityLow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneSensitivityLowSymbolic)}
    </span>
  );
}

export default MicrophoneSensitivityLow;
