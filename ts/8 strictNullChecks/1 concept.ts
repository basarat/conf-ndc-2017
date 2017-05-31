function addDays(date: Date, days: number) {
  var dat = new Date(date.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

const tomorrow = addDays(new Date(), 1);
console.log(tomorrow);

addDays(null, null);

/** Module */
export { addDays };