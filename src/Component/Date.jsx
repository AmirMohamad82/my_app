const CurrentDate = (props) => {
  const date = (date) => {
    const dateObj = new Date(date * 1000); // convert to milliseconds
    const year = dateObj.getFullYear();
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // add leading zero
    const day = ("0" + dateObj.getDate()).slice(-2); // add leading zero
    const hours = ("0" + dateObj.getHours()).slice(-2); // add leading zero
    const minutes = ("0" + dateObj.getMinutes()).slice(-2); // add leading zero
    const seconds = ("0" + dateObj.getSeconds()).slice(-2); // add leading zero
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTime;
  };

  return date(props.date);
};

export default CurrentDate;
