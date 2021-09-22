import PropTypes from "prop-types";
import React from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";

import Carte from "./Carte";
import { hasPetiteCouronne, normalizeDpt } from "./departements";

const France = ({ color, highlightColor, departements }) => {
  const dpts = [
    ...departements,
    ...(hasPetiteCouronne(departements) ? ["75-92-93-94"] : []),
  ];

  return (
    <SvgLoader svgXML={Carte}>
      <SvgProxy selector="#carte" fill={color} />
      {dpts.map((dpt) => (
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
  highlightColor: PropTypes.string,
};

France.defaultProps = {
  color: "#74B4FF",
  departements: [],
  highlightColor: "#b3ff75",
};

export default France;
