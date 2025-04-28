/**
* This inner body component holds teh top leverl router view such as Todos, Users, Posts, Albums
*/

import { InnerBodyProps } from "../../common/interfaces";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./notFound";
import classes from './innerBody.module.css';
import { lazy, ReactNode, Suspense } from "react";

const Users = lazy(() => import('../users/users'));
const Todos = lazy(() => import('../todos/todos'));
const Posts = lazy(() => import('../posts/posts'));
const Albums = lazy(() => import('../albums/albums'));

const getRouteView = (url:string): ReactNode => {
  switch(url) {
    case 'users':
      return <Users/>;
    case 'posts':
      return <Posts/>;
    case 'albums':
      return <Albums/>;      
    case 'todos':
    default:
      return <Todos/>;
  }
}

const InnerBody: React.FC<InnerBodyProps> = ({routes}: InnerBodyProps) => {
  let defaultRoute = routes.find(r => r.isDefaultLink);
  if (!defaultRoute && routes && routes.length > 0) {
    defaultRoute = routes[0];
  }

  const defaultRouteElement = defaultRoute ? <Route path='/' element={<Navigate replace to={defaultRoute.Route} />} /> : <></>;
  const notFoundElement =  <Route path='/*' element={<Suspense><NotFound/></Suspense>}></Route>;

  const solidRouteElements = [];
  for (let i = 0; i < routes.length; i++) {
    const myRoute = routes[i].Route;
    const myElement = getRouteView(myRoute);
    solidRouteElements.push(<Route path={myRoute} element={<Suspense>{myElement}</Suspense>}></Route>)
  }

  return (
    <div className={classes.innerBodyContainer}>
      <Routes>
        {defaultRouteElement}
        {solidRouteElements}
        {notFoundElement}
      </Routes>      
    </div>
  );
}

export default InnerBody;
