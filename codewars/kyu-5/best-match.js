function bestMatch(ALAHLYGoals, zamalekGoals) {
  if (ALAHLYGoals.length === 1) {
    return 0;
  }

  let zGoals = zamalekGoals[0];
  let lowestDifference = ALAHLYGoals[0] - zamalekGoals[0];
  let lowestIndex = 0;
  for (let i = 1; i < ALAHLYGoals.length; i++) {
    if (
      ALAHLYGoals[i] - zamalekGoals[i] < lowestDifference ||
      (ALAHLYGoals[i] - zamalekGoals[i] == lowestDifference &&
        zamalekGoals[i] > zGoals)
    ) {
      zGoals = zamalekGoals[i];
      lowestDifference = ALAHLYGoals[i] - zamalekGoals[i];
      lowestIndex = i;
    }
  }

  return lowestIndex;
}
bestMatch([6, 4], [1, 2]);
// 1
bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]);
// 4
bestMatch([3, 4, 3], [1, 1, 2]);
// 2
bestMatch([4, 3, 4], [1, 1, 1]);
