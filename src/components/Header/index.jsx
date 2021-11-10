import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import removeUserFromLocalStorage from "../../util/removeUserFromLocalStorage";

import {getUser, deleteUserAction} from "../../store/user/actions";

import PrimaryButton from "../common/PrimaryButton";

import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {firstName, lastName} = useSelector(({userReducer}) => userReducer);

  useEffect(() => {
    if(!firstName && !lastName) {
      dispatch(getUser());
    }
  }, [firstName, lastName]);

  const handleLogout = () => {
    removeUserFromLocalStorage();
    dispatch(deleteUserAction());
    navigate('/signIn');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-logo">
            <Link to="/">Memorize App</Link>
          </h1>
          <nav className="header-nav">
            <Link className="header-nav__profile" to="/profile">
              {`${firstName} ${lastName}`}
            </Link>
            <PrimaryButton onClick={handleLogout} className="header-nav__logout">
              Log out
            </PrimaryButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;