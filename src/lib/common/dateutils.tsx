import moment from "moment";

export const formatDate = (date: any, format: string): string => {
  const formattedDate = moment(date).format(format);
  return formattedDate;
};

export const dateToGMT = (inputDate: string, inputDateFormat: string) => {
  const formattedDate = moment(inputDate, inputDateFormat).toDate();
  return formattedDate;
};

export const dateTimeFromNow = (value: string): string => {
  return value ? moment(value).fromNow() : "";
};

export const dateFormatter = (date: string): string => {
  return moment(date).format("h:mm A, MMM Do, YYYY");
};

export const convertGMTtoLocal = (gmtDate: string): string => {
  const localDate = moment.utc(gmtDate).local();
  const formattedLocalDate = localDate.format("h:mm A, MMM Do, YYYY");
  return formattedLocalDate;
};

export const convertMinsToHrsAndMins = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursText = hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""}` : "";
  const minutesText =
    remainingMinutes > 0
      ? `${remainingMinutes} min${remainingMinutes > 1 ? "s" : ""}`
      : "";

  if (hours > 0 && remainingMinutes > 0) {
    return `${hoursText}, ${minutesText}`;
  } else {
    return hoursText + minutesText;
  }
};
