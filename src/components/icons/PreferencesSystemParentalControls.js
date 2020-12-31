import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemParentalControlsSymbolic } from '../../assets/icons/preferences-system-parental-controls-symbolic.svg';

function PreferencesSystemParentalControls({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemParentalControlsSymbolic)}
    </span>
  );
}

export default PreferencesSystemParentalControls;
