import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Auth from "../../components/Auth";

import AuthApi from "../../services/api/AuthApi";

import {validate} from "../../services/validators";

import signInGroups from "../../constants/signInGroups";

const SignIn = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = data;

    setSubmitted(true);

    if(validate(data)) {
      AuthApi.signIn(email, password).then((res) => res ? navigate('/') : null);
    }
  }

  return (
    <Auth
      groups={signInGroups}
      data={data}
      setData={setData}
      submitted={submitted}
      type={{
        name: 'Sign In',
        className: 'sign-in',
        link: '/signUp',
        linkName: 'Sign Up'
      }}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignIn;