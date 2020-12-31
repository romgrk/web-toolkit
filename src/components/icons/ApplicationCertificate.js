import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationCertificateSymbolic } from '../../assets/icons/application-certificate-symbolic.svg';

function ApplicationCertificate({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationCertificateSymbolic)}
    </span>
  );
}

export default ApplicationCertificate;
