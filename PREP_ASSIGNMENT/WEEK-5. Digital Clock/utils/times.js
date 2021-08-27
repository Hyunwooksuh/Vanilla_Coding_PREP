export function getTimeStamp() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours.toString().length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}
