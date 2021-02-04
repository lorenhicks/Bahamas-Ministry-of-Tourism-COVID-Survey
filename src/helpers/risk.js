export function checkHighRisk(surveyData = {}) {
  if (typeof surveyData !== "object") return false;

  const {
    closeContact,
    symptoms = {},
    certifySigns,
    abideHealthMeasures
  } = surveyData;

  if (closeContact || !symptoms.none || !certifySigns || !abideHealthMeasures)
    return true;

  return false;
}
