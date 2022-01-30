const validateField = (val, validations, data) => {
  const value = val.trim();
  const valueLength = value.length;
  let isValid = true;

  for (let i = 0; i < validations.length; i++) {
    const {required, min, max, custom} = validations[i];

    if(required && !value) {
      isValid = false;
    }

    if(min && valueLength < min) {
      isValid = false;
    }

    if(max && valueLength > max) {
      isValid = false;
    }

    if(custom && !custom(value, data)) {
      isValid = false;
    }
  }

  return isValid;
}

const validateFields = (data, fields) => {
  let isValid = true;

  const dataArray = Object.entries(data);
  for (let i = 0; i < dataArray.length; i++) {
    const [key, value] = dataArray[i];
    const field = fields.find((field) => field.name === key);
    isValid = field && validateField(value, field.validations, data);
    if(!isValid) break;
  }

  return isValid;
}

export default validateFields;
