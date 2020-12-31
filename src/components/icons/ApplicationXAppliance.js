import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationXApplianceSymbolic } from '../../assets/icons/application-x-appliance-symbolic.svg';

function ApplicationXAppliance({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationXApplianceSymbolic)}
    </span>
  );
}

export default ApplicationXAppliance;
