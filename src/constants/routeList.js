import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";

import Home from "../pages/home";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const ROUTE_LIST = [
  {
    id: 1,
    exact: true,
    path: '/',
    element: (
      <PrivateRoute>
        <Header />
        <Home />
      </PrivateRoute>
    ),
  },
  {
    id: 2,
    exact: true,
    path: '/profile',
    element: (
      <PrivateRoute>
        <Header />
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    id: 3,
    exact: true,
    path: '/login',
    element: <SignIn />,
  },
  {
    id: 4,
    exact: true,
    path: '/signup',
    element: <SignUp />,
  },
];

export default ROUTE_LIST;
