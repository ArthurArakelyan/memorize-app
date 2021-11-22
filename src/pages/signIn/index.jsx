import {useState} from "react";
import {useDispatch} from "react-redux";

import Auth from "../../components/Auth";

import {signIn} from "../../store/auth/actions";

import {validate} from "../../services/validators";

import signInGroups from "../../constants/signInGroups";

const SignIn = () => {
  const dispatch = useDispatch();

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
      dispatch(signIn(email, password));
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