function* whole() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

for (const item of whole()) {
  if (item > 100) break;
  console.log(item);
}