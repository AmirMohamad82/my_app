function TodayDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];

  return (
    <>
      {dayOfWeek}, {date} {month} 
    </>
  );
}

export default TodayDate;
