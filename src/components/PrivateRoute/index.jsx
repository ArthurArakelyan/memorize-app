import {Navigate} from "react-router-dom";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";

const PrivateRoute = ({children}) => {
  const auth = getUserFromLocalStorage();
  return auth ? <>{children}</> : <Navigate to="/signIn" />;
}

export default PrivateRoute;