import PATH_SIMPLIFICATORS from '../constants/pathSimplicators.js';

export const simplifyPath = instruction => {
  const repeatedPatterns = Object.keys(PATH_SIMPLIFICATORS);
  repeatedPatterns.forEach(pattern => {
    while (instruction.includes(pattern)) {
      instruction = instruction.replace(pattern, PATH_SIMPLIFICATORS[pattern]);
    };
  });

  return instruction;
};

export const isItPossibleToMove = {
  N: (position, maxX, maxY) => position[1] < maxY,
  S: (position, maxX, maxY) => position[1] > 0,
  W: (position, maxX, maxY) => position[0] > 0,
  E: (position, maxX, maxY) => position[0] < maxX,
};

export const move = {
  N: item => [item[0], item[1] + 1],
  S: item => [item[0], item[1] - 1],
  W: item => [item[0] - 1, item[1]],
  E: item => [item[0] + 1, item[1]],
};

export const nextPosition = (direction, position, maxX, maxY) => {
  if(isItPossibleToMove[direction](position, maxX, maxY)) {
    return move[direction](position);
  } else {
    return [...position];
  }
};

export const calculateRoombaPath = input => {
  if (input.error) {
    return input;
  }

  let {roomSize, roombaXY, instruction, dustXY} = input.data;
  const maxX = +roomSize.split(' ')[0];
  const maxY = +roomSize.split(' ')[1];
  roombaXY = roombaXY.split(' ').map(Number);
  instruction = simplifyPath(instruction);

  let roombaPositions = instruction.split('').reduce((acc, direction) => {
    let currentPosition = acc[acc.length - 1];
    return [...acc, nextPosition(direction, currentPosition, maxX, maxY)];
  },[roombaXY]);

  return {
    data: {
      roombaPositions: roombaPositions.map(position => position.join(' ')),
      dustXY
    }
  }
};

export default calculateRoombaPath;
