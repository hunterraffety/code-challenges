function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  let convertedString = "";
  const keys = Object.keys(htmlEntities);
  for (let i = 0; i < str.length; i++) {
    if (keys.includes(str[i])) {
      convertedString += htmlEntities[str[i]];
    } else {
      convertedString += str[i];
    }
  }
  return convertedString;
}

convertHTML("Dolce & Gabbana");
// Dolce & amp; Gabbana
