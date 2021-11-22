import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import AuthForm from "./AuthForm";

import "./styles.scss";

const Auth = ({type, data, setData, submitted, groups, handleSubmit}) => {
  const navigate = useNavigate();

  const auth = useSelector(({authReducer}) => authReducer);

  useEffect(() => {
    if(auth) {
      navigate('/');
    }
  }, [auth]);

  const handleChange = ({target: {name, value}}) => {
    setData((data) => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div className={`auth ${type.className}`}>
      <div className="auth-content">
        <div className="auth-form__wrapper">
          <h2 className="auth-form__heading">{type.name}</h2>
          <AuthForm
            groups={groups}
            data={data}
            submitted={submitted}
            type={type}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;