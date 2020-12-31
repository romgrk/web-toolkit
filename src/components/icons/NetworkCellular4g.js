import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellular4gSymbolic } from '../../assets/icons/network-cellular-4g-symbolic.svg';

function NetworkCellular4g({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellular4gSymbolic)}
    </span>
  );
}

export default NetworkCellular4g;
