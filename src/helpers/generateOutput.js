const generateOutput = input => {
  if (input.error) {
    return input;
  }

  const {roombaPositions, dustXY } = input.data;
  let cleanedUpDust = dustXY.reduce((acc, current) => {
    if (roombaPositions.includes(current)) {
      ++acc;
    }

    return acc;
  }, 0);

  return {
    outputData: `${roombaPositions[roombaPositions.length - 1]}\n${cleanedUpDust}`,
  };
};

export default generateOutput;
