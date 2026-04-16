import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import AllFriends from "../pages/Friends/AllFriends";
import FriendDetails from "../pages/Friends/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "allfriends",
        Component: AllFriends,
      },
      {
        path:'allfriends/:id',
        Component: FriendDetails
      },
      {
        path:'/timeline',
        
      },
      {
        path:'/stats'
      }
    ],
    errorElement: <h2>This is Error Page. 404</h2>,
  },
]);
