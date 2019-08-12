function parseHTMLColor(color) {
  const rgb = {};
  const extra = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  let converted = [];
  if (color[0] === "#") {
    loop(color);
  } else {
    let hex = PRESET_COLORS[color.toLowerCase()];
    loop(hex);
  }

  function loop(arr) {
    let start = 1;
    if (arr.length < 7) {
      for (let i = start; i < arr.length; i++) {
        converted.push(hexConvert([arr[i], arr[i]]));
      }
    } else {
      for (let i = start; i < arr.length; i += 2) {
        converted.push(hexConvert(arr.slice(i, i + 2)));
      }
    }
  }

  function hexConvert(arr) {
    let value1 = extra[arr[0]] !== undefined ? extra[arr[0]] : arr[0];
    let value2 = extra[arr[1]] !== undefined ? extra[arr[1]] : arr[1];
    return Math.pow(16, 1) * Number(value1) + Math.pow(16, 0) * Number(value2);
  }
  rgb["r"] = converted[0];
  rgb["g"] = converted[1];
  rgb["b"] = converted[2];
  return rgb;
}
