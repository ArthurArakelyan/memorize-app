import {Routes, Route} from "react-router-dom";

import ROUTE_LIST from "./constants/routeList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {ROUTE_LIST.map((route) => {
          return (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;