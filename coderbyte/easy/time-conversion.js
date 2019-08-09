function TimeConvert(num) {
  return `${Math.floor(num / 60)}:${num % 60}`;
}
TimeConvert(45);
// 0:45
TimeConvert(126);
// 2:6
