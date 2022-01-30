const validateField = (val, validations, setError) => {
  const value = val.trim();
  const valueLength = value.length;
  let hasError = false;

  for (let i = 0; i < validations.length; i++) {
    const {required, message, min, max, custom} = validations[i];

    if(required && !value) {
      setError({error: true, message});
      hasError = true;
      break;
    }

    if(min && valueLength < min) {
      setError({error: true, message});
      hasError = true;
    }

    if(max && valueLength > max) {
      setError({error: true, message});
      hasError = true;
    }

    if(custom && !custom(value)) {
      setError({error: true, message});
      hasError = true;
    }
  }

  if(!hasError) {
    setError((err) => ({...err, error: false}));
  }
}

export default validateField;