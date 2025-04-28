/**
* This is the Albums component only used for routing demo purpose with only place holder content.
* The url "/albums" direct to this component.
*/

import classes from './albums.module.css';

const Albums: React.FC = () => {
  return (
    <div className={classes.albumsContainer}>
      This is ALBUMS.
    </div>
  );
}

export default Albums;