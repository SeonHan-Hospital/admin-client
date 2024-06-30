export const dateHandler = (date: string) => {
  return `${new Date(date).getFullYear()}-${
    new Date(date).getMonth() + 1 < 10
      ? "0" + (new Date(date).getMonth() + 1).toString()
      : new Date(date).getMonth() + 1
  }-${
    new Date(date).getDate() < 10
      ? "0" + new Date(date).getDate()
      : new Date(date).getDate()
  } ${
    new Date(date).getHours() < 10
      ? "0" + new Date(date).getHours()
      : new Date(date).getHours()
  }:${
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes()
  }`;
};
