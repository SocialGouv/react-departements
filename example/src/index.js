import React from "react";
import { render } from "react-dom";

import France from "../../src";

const Demo = () => (
  <React.Fragment>
    <h3>Demo react-departements</h3>
    <France departements={[75, 92, 93, 94, 89, 21, 33, 47, 74, "2a", 976]} />
  </React.Fragment>
);

render(<Demo />, document.getElementById("root"));
