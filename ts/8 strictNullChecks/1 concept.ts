function addDays(date: Date, days: number) {
  const time = date.getTime();
  const newTime = time
    + days * 1000 * 60 * 60 * 24;
  return new Date(newTime);
}

const tomorrow = addDays(new Date(), 1);
console.log(tomorrow);
