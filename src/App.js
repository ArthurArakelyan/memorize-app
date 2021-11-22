import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Header from "./components/Header";
import Home from "./pages/home";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <PrivateRoute>
            <Header />
            <Home />
          </PrivateRoute>
        } />
        <Route exact path='/profile' element={
          <PrivateRoute>
            <Header />
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;