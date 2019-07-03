function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const orbitalPeriods = arr.map(orbit => {
    orbit.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + orbit.avgAlt, 3) / GM)
    );
    delete orbit.avgAlt;
    return orbit;
  });

  return orbitalPeriods;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
// [{name: "sputnik", orbitalPeriod: 86400}]
