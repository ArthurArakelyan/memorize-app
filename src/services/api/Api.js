class Api {
  static errorHandler(error) {
    console.error(error);
    alert(error.message);
  }
}

export default Api;