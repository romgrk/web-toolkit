import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneSensitivityHighSymbolic } from '../../assets/icons/microphone-sensitivity-high-symbolic.svg';

function MicrophoneSensitivityHigh({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneSensitivityHighSymbolic)}
    </span>
  );
}

export default MicrophoneSensitivityHigh;
