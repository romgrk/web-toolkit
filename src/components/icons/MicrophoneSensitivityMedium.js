import React from "react";
import cx from 'clsx';
import { ReactComponent as MicrophoneSensitivityMediumSymbolic } from '../../assets/icons/microphone-sensitivity-medium-symbolic.svg';

function MicrophoneSensitivityMedium({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MicrophoneSensitivityMediumSymbolic)}
    </span>
  );
}

export default MicrophoneSensitivityMedium;
