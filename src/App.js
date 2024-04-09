import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Here's the list of users: https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
