import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularEdgeSymbolic } from '../../assets/icons/network-cellular-edge-symbolic.svg';

function NetworkCellularEdge({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularEdgeSymbolic)}
    </span>
  );
}

export default NetworkCellularEdge;
