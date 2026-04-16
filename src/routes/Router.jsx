import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import AllFriends from "../pages/Friends/AllFriends";
import FriendDetails from "../pages/Friends/FriendDetails";
import TimeLine from "../pages/TimeLine/TimeLine";
import ErrorPage from "../components/errorPage/ErrorPage";

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
        path: "allfriends/:id",
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: TimeLine,
      },
      {
        path: "/stats",
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
