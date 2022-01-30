import {useState, useEffect, useCallback} from "react";

import ErrorMessage from "../components/common/Form/components/ErrorMessage";

import validateField from "../util/validateField";

const withField = (Component) => {
  return ({validate = false, validations = [], ...props}) => {
    const {value, onChange} = props;

    const [error, setError] = useState({
      error: false,
      message: '',
    });

    useEffect(() => {
      if(validate) {
        validateField(value, validations, setError);
      }
    }, [validate]);

    const handleChange = useCallback((e) => {
      if(validate) {
        validateField(e.target.value, validations, setError);
      }
      onChange(e);
    }, [validations, onChange]);

    return (
      <>
        <Component {...props} error={validate && error.error} onChange={handleChange} />
        <ErrorMessage error={error} validate={validate} />
      </>
    );
  }
}

export default withField;
