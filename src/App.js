import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;