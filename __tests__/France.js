import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import France from "../src";

test("should colorize dpts", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<France departements={[75, 13, 12]} />);
  expect(result).toMatchSnapshot();
});

test("should normalize corsica", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<France departements={["2a", "2b"]} />);
  expect(result).toMatchSnapshot();
});

test("should normalize dpts<10", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<France departements={[5, 6, 7, 8]} />);
  expect(result).toMatchSnapshot();
});
