import React from "react";
import PropTypes from "prop-types";
import { SvgLoader, SvgProxy } from "react-svgmt";

import Carte from "./Carte";

const normalizeDpt = dpt => {
  if (isNaN(dpt)) {
    return dpt.toUpperCase(); // 2A, 2B
  }
  if (parseInt(dpt) < 10) {
    return "0" + dpt;
  }
  return dpt;
};

const France = ({ color, highlightColor, departements }) => {
  const dpts = [...departements];
  if (
    ["75", "92", "93", "94"].filter(dpt =>
      departements.map(d => d.toString()).includes(dpt)
    ).length === 4
  ) {
    dpts.push("75-92-93-94");
  }
  return (
    <SvgLoader svgXML={Carte}>
      <SvgProxy selector="#carte" fill={color} />
      {dpts.map(dpt => (
        <SvgProxy
          key={dpt}
          selector={`#dpt-${normalizeDpt(dpt)}`}
          fill={highlightColor}
        />
      ))}
    </SvgLoader>
  );
};

France.propTypes = {
  color: PropTypes.string,
  departements: PropTypes.array,
  highlightColor: PropTypes.string
};

France.defaultProps = {
  color: "#74B4FF",
  highlightColor: "#b3ff75",
  departements: []
};
export default France;
