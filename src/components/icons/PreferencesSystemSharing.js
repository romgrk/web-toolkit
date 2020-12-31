import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemSharingSymbolic } from '../../assets/icons/preferences-system-sharing-symbolic.svg';

function PreferencesSystemSharing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemSharingSymbolic)}
    </span>
  );
}

export default PreferencesSystemSharing;
