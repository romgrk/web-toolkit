import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemDetailsSymbolic } from '../../assets/icons/preferences-system-details-symbolic.svg';

function PreferencesSystemDetails({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemDetailsSymbolic)}
    </span>
  );
}

export default PreferencesSystemDetails;
