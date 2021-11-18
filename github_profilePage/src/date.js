const getDate = (arg) => {
  return new Date(arg);
};

export const getMonth = (arg, length) => {
  return getDate(arg).toLocaleString("default", { month: length });
};

export const getDay = (arg) => {
  return getDate(arg).toLocaleString("default", { day: "numeric" });
};
