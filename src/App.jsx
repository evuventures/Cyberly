import React from "react";
import ExpertDirectoryPage from "./pages/ExpertDirectoryPage";
import ExpertProfile from "./components/ExpertProfile";
import LiveSession from "./components/LiveSession";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  // Uncomment one of the following lines depending on what you want to show
  // return <ExpertDirectoryPage />;
  // return <ExpertProfile />;
  // return <LiveSession />;
  // return <Signup />;
  return <Login />;
}

export default App;
