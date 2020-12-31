import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewListBulletSymbolic } from '../../assets/icons/view-list-bullet-symbolic.svg';

function ViewListBullet({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewListBulletSymbolic)}
    </span>
  );
}

export default ViewListBullet;
