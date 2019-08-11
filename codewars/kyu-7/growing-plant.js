function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 1;
  let height = upSpeed;

  while (height <= desiredHeight) {
    if (height == desiredHeight) {
      return day;
    }
    height -= downSpeed;
    day++;
    height += upSpeed;
  }
  return day;
}

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 1;

  for (let height = upSpeed; height < desiredHeight; height += upSpeed) {
    height -= downSpeed;
    day++;
  }
  return day;
}

// growingPlant(10,9,4)
// 1
// growingPlant(100,10,910)
// 10
