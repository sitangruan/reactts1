/**
 * This the NotFound component used for when a given url has no corresponding component matched in the routing.
 */

import classes from './notFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={classes.notFoundContainer}>
      NOT FOUND!
    </div>
  );
}

export default NotFound;