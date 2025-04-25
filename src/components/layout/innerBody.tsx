/*
This inner body component holds teh top leverl router view such as Todos, Users, Posts, Albums
*/

// import { lazy, Suspense } from "react"
import { InnerBodyProps } from "../../common/interfaces";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./notFound";
import Users from '../users/users';
import Todos from '../todos/todos';
import Posts from '../posts/posts';
import Albums from "../albums/albums";
import classes from './innerBody.module.css';

// const Users = lazy(() => import('../users/users'));
// const Todos = lazy(() => import('../todos/todos'));
// const Posts = lazy(() => import('../posts/posts'));
// const Albums = lazy(() => import('../albums/albums'));

// const getRouteView = (url:string) => {
//   switch(url) {
//     case 'users':
//       return Users;
//     case 'posts':
//       return Posts;
//     case 'albums':
//       return Albums;      
//     case 'todos':
//     default:
//       return Todos;
//   }
// }

const InnerBody: React.FC<InnerBodyProps> = ({routes} : InnerBodyProps) => {
  // let defaultRoute = routes.find(r => r.isDefaultLink);
  // if (!defaultRoute && routes && routes.length > 0) {
  //   defaultRoute = routes[0];
  // }

  // const defaultRouteElement = defaultRoute ? <Route path='/' element={<Navigate replace to={defaultRoute.Route} />} /> : <></>;
  // const notFoundElement =  <Route path='/*' element={<Suspense><NotFound/></Suspense>}></Route>;

  // const solidRouteElements = [];
  // for (let i = 0; i < routes.length; i++) {
  //   const myElement = getRouteView(routes[i].Route);
  //   solidRouteElements.push(<Route path='/todo/*' element={<Suspense>{myElement}</Suspense>}></Route>)
  // }

  // return (
  //   <div className='inner-body-container'>
  //     <Routes>
  //       <Route path='/' element={<Navigate replace to='/todos' />} />
  //       <Route path='/todos/*' element={<Suspense><Todos/></Suspense>}></Route>
  //       <Route path='/users' element={<Suspense><Users/></Suspense>}></Route>
  //       <Route path='/albums' element={<Suspense><Albums/></Suspense>}></Route>
  //       <Route path='/posts' element={<Suspense><Posts/></Suspense>}></Route>
  //       {/* <Route path="/*" element={<Navigate replace to="todo" />} /> */}
  //       <Route path='/*' element={<Suspense><NotFound/></Suspense>}></Route>
  //     </Routes>      
  //   </div>
  // );

  return (
    <div className={classes.innerBodyContainer}>
      <Routes>
        <Route path='/' element={<Navigate replace to='/todos' />} />
        <Route path='/todos/*' element={<Todos/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/albums' element={<Albums/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        {/* <Route path="/*" element={<Navigate replace to="todo" />} /> */}
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default InnerBody;
