import React, { Fragment } from "react";
import Practice from "./practice/practice";
import Test from "./test/test";
import Home from "./index";
import { Route } from "react-router-dom";

export default () => {
  return (
    <div style={{ padding: "20px" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/practice" component={Practice} />
      <Route exact path="/test" component={Test} />
    </div>
  );
};
