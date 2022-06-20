import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/NavBar";
import RouteList from "./routes/RouteList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <RouteList></RouteList>
    </Router>
  );
};

export default App;
