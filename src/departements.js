export const normalizeDpt = dpt => {
  const dtpNumber = Number(dpt);
  if (isNaN(dtpNumber)) {
    return dpt.toUpperCase(); // 2A, 2B
  }
  if (dtpNumber < 10) {
    return "0" + dpt;
  }
  return dtpNumber;
};

export const hasPetiteCouronne = departements =>
  ["75", "92", "93", "94"].filter(dpt =>
    departements.map(normalizeDpt).includes(normalizeDpt(dpt))
  ).length === 4;
