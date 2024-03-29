import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

import {setAuth} from "../../store/auth/actions";
import {startLoading, stopLoading} from "../../store/ui/actions";

import AuthApi from "../../services/api/AuthApi";

import Loader from "../common/Loader";

const PrivateRoute = ({children}) => {
  const dispatch = useDispatch();

  const auth = useSelector(({authReducer}) => authReducer);
  const isLoading = useSelector(({uiReducer}) => uiReducer);

  useEffect(() => {
    if(auth === null) {
      dispatch(startLoading());

      const clearAuthObserver = AuthApi.checkAuth((user) => {
        if(!user) dispatch(stopLoading());
        dispatch(setAuth(!!user));
      });

      return () => clearAuthObserver();
    }
  }, []);

  if(isLoading && auth === null) {
    return <Loader />;
  } else if(auth) {
    return children;
  } else if(auth === false) {
    return <Navigate to="/login" />;
  }

  return null;
}

export default PrivateRoute;