export function camelToSentenceCase(camelCaseStr: string) {
  let sentenceCaseStr = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase();
  sentenceCaseStr = sentenceCaseStr.charAt(0).toUpperCase() + sentenceCaseStr.slice(1);
  return sentenceCaseStr;
}

export function getIdFromUserId(userId: string) {
  const split = userId.split('_');
  return split[split.length-1];
}

export function convertTo12HourFormat(time: string) {
  const timeArray = time.split(':');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hours: any = timeArray[0];
  const minutes = timeArray[1];

  hours = parseInt(hours, 10);

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  hours = hours < 10 ? '0' + hours : hours;

  return `${hours}:${minutes} ${ampm}`;
}