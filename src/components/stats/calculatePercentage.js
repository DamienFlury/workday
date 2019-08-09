const calculatePercentage = (startTime, currentTime, endTime) => {
  const startAsDecimal = startTime.hours + startTime.minutes / 60;
  const nowAsDecimal = currentTime.hours + currentTime.minutes / 60 + currentTime.seconds / 3600;
  const endAsDecimal = endTime.hours + endTime.minutes / 60;
  if (startAsDecimal > nowAsDecimal) return 0;
  if (endAsDecimal < nowAsDecimal) return 100;
  return (
    ((nowAsDecimal - startAsDecimal) / (endAsDecimal - startAsDecimal)) * 100
  );
};

export default calculatePercentage;
