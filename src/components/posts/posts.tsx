/**
* This is the Posts component only used for routing demo purpose with only place holder content.
* The url "/posts" direct to this component.
*/

import classes from './posts.module.css';

const Posts: React.FC = () => {
  return (
    <div className={classes.postsContainer}>
      This is POSTS.
    </div>
  );
}

export default Posts;