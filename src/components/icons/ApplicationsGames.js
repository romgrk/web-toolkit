import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsGamesSymbolic } from '../../assets/icons/applications-games-symbolic.svg';

function ApplicationsGames({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsGamesSymbolic)}
    </span>
  );
}

export default ApplicationsGames;
