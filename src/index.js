import React from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";

import Carte from "./Carte";

console.log("Carte", Carte);

const normalizeDpt = dpt => {
  if (isNaN(dpt)) {
    return dpt.toUpperCase(); // 2A, 2B
  }
  if (parseInt(dpt) < 10) {
    return "0" + dpt;
  }
  return dpt;
};

const France = ({ color, highlightColor, departements }) => (
  <SvgLoader svgXML={Carte}>
    <SvgProxy selector="#carte" fill={color} />
    {departements.map(dpt => (
      <SvgProxy
        key={dpt}
        selector={`#dpt-${normalizeDpt(dpt)}`}
        fill={highlightColor}
      />
    ))}
  </SvgLoader>
);

France.propTypes = {};

France.defaultProps = {
  color: "#74B4FF",
  highlightColor: "#b3ff75",
  departements: []
};
export default France;
