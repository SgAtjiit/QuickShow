const dateFormat = (date) => {
  const d = new Date(date);
  const localDate = d.toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return localDate;
};

export default dateFormat;
