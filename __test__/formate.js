function formateDate(timestamp) {
  const date = new Date(timestamp)
  const month = date.getMonth() + 1
  const day = date.getUTCDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  console.log(month, day, hour, minute);

}


formateDate(Date.now())