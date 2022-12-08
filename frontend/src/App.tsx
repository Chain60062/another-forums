import React from "react";
import { Link } from "react-router-dom";
import {} from "./common/index"
import "./index.css"
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>home</h1>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
};

export default App;