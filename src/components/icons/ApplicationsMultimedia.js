import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsMultimediaSymbolic } from '../../assets/icons/applications-multimedia-symbolic.svg';

function ApplicationsMultimedia({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsMultimediaSymbolic)}
    </span>
  );
}

export default ApplicationsMultimedia;
