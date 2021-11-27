function descriptionValidator() {
  if(this.description.trim()) {
    return this.description.trim().length <= 500;
  }

  return true;
}

export default descriptionValidator;