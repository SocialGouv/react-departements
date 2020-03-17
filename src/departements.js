export const normalizeDpt = dpt => {
  if (isNaN(dpt)) {
    return dpt.toUpperCase(); // 2A, 2B
  }
  if (parseInt(dpt) < 10) {
    return "0" + dpt;
  }
  return dpt;
};

export const hasPetiteCouronne = departements =>
  ["75", "92", "93", "94"].filter(dpt =>
    departements.map(d => d.toString()).includes(dpt)
  ).length === 4;
