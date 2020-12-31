import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationPortraitRightSymbolic } from '../../assets/icons/orientation-portrait-right-symbolic.svg';

function OrientationPortraitRight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationPortraitRightSymbolic)}
    </span>
  );
}

export default OrientationPortraitRight;
