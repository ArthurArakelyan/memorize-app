const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));
export default getUserFromLocalStorage;