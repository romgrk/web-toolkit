import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneSensitivityMutedSymbolic } from '../../assets/icons/microphone-sensitivity-muted-symbolic.svg';

function MicrophoneSensitivityMuted({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneSensitivityMutedSymbolic)}
    </span>
  );
}

export default MicrophoneSensitivityMuted;
