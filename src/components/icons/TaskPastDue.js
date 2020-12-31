import React from "react";
import cx from 'clsx';
import { ReactComponent as TaskPastDueSymbolic } from '../../assets/icons/task-past-due-symbolic.svg';

function TaskPastDue({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TaskPastDueSymbolic)}
    </span>
  );
}

export default TaskPastDue;
