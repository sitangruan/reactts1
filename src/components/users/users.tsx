/**
 * This is the Users component used only for routing demo purpose. It has no solid content.
 * It only demo the "Users" nav link can direct to this component.
 */

import classes from './users.module.css';

const Users: React.FC = () => {
  return (
    <div className={classes.usersContainer}>
      This is USERS.
    </div>
  );
}

export default Users;