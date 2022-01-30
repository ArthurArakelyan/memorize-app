const regexp = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i;

const emailValidator = (value) => regexp.test(value.trim());

export default emailValidator;
