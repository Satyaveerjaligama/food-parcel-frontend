export function camelToSentenceCase(camelCaseStr: string) {
  let sentenceCaseStr = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase();
  sentenceCaseStr = sentenceCaseStr.charAt(0).toUpperCase() + sentenceCaseStr.slice(1);
  return sentenceCaseStr;
}
