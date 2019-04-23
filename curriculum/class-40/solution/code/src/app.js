import React from "react";

import Q from "./q/context.js";
import Dashboard from "./dashboard.js";

export default props => {
  return (
    <Q>
      <Dashboard />
    </Q>
  );
};
