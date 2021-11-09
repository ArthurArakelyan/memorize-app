function lastNameValidator() {
  return this.lastName.trim() && this.lastName.trim().length <= 50;
}

export default lastNameValidator;