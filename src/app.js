import React, { Fragment } from "react";
import Routes from "./components/router";
import Header from "./components/header";
function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}

export default App;
