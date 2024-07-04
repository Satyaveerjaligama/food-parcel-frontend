export function camelToSentenceCase(camelCaseStr: string) {
  let sentenceCaseStr = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase();
  sentenceCaseStr = sentenceCaseStr.charAt(0).toUpperCase() + sentenceCaseStr.slice(1);
  return sentenceCaseStr;
}

export function getIdFromUserId(userId: string) {
  const split = userId.split('_');
  return split[split.length-1];
}