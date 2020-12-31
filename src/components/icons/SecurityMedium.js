import React from "react";
import cx from 'clsx';
import { ReactComponent as SecurityMediumSymbolic } from '../../assets/icons/security-medium-symbolic.svg';

function SecurityMedium({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SecurityMediumSymbolic)}
    </span>
  );
}

export default SecurityMedium;
