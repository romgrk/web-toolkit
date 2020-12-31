import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaRecordSymbolic } from '../../assets/icons/media-record-symbolic.svg';

function MediaRecord({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaRecordSymbolic)}
    </span>
  );
}

export default MediaRecord;
