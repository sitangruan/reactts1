/**
* The main body of the app. It contains the sidebar which has the navgiation menu items.
* It also has the inner body which holds the top level router view.
* The body respects basic response layout concept. When it is middle size (768px width) or smaller screen, the layout will change to vertical from honrizontal.
* That means in smaller screen the sidebar component is on the top position instead of on the left side position. 
*/


import classes from './body.module.css';
import { Sidebar } from './sidebar';
import { navLinks } from '../../common/constants';
import InnerBody from './innerBody';

const Body: React.FC = () => {
  return (
    <div className={classes.bodyContainer}>
      <Sidebar links={navLinks}></Sidebar>
      <InnerBody routes={navLinks}></InnerBody>
    </div>
  );
}

export default Body;