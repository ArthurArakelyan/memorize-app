import {useState} from "react";
import {useDispatch} from "react-redux";

import Auth from "../../components/Auth";

import {signIn} from "../../store/auth/actions";

import validateFields from "../../util/validateFields";

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

    if(validateFields(data, signInGroups)) {
      dispatch(signIn(email, password));
    } else {
      setSubmitted(true);
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
        link: '/signup',
        linkName: 'Sign Up'
      }}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignIn;