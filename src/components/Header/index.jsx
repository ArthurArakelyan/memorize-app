import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import removeUserFromLocalStorage from "../../util/removeUserFromLocalStorage";

import {setAuth} from "../../store/auth/actions";
import {getUser, deleteUserAction} from "../../store/user/actions";
import {deleteMemoriesAction} from "../../store/memories/actions";

import PrimaryButton from "../common/PrimaryButton";

import avatar from "../../assets/images/avatar.jpg";

import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {firstName, lastName, imgUrl} = useSelector(({userReducer}) => userReducer);

  useEffect(() => {
    if(!firstName && !lastName) {
      dispatch(getUser());
    }
  }, [firstName, lastName]);

  const handleLogout = () => {
    removeUserFromLocalStorage();
    dispatch(deleteUserAction());
    dispatch(deleteMemoriesAction());
    dispatch(setAuth(null));
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
              <span>{`${firstName} ${lastName}`}</span>
              <div className="header-nav__profile_avatar_wrapper">
                <img className="header-nav__profile_avatar" src={imgUrl ? imgUrl : avatar} alt="Avatar" />
              </div>
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