const setUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify({
    uid: user.uid,
    access_token: user.accessToken
  }));
}

export default setUserToLocalStorage;