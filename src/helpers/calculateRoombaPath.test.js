import { calculateRoombaPath, move, nextPosition, isItPossibleToMove, simplifyPath } from './calculateRoombaPath.js';

describe('simplifyPath function should remove duplicated instructions', () => {
  it('NSNSNS should become NS only', () => {
    expect(simplifyPath('WESNSNSNSESW')).toEqual('WESNSESW');
  });

  it('SNSN should become SN only', () => {
    expect(simplifyPath('WESNSNSESW')).toEqual('WESNSESW');
  });

  it('WEWEWE should become WE only', () => {
    expect(simplifyPath('WEWEWESSSSESW')).toEqual('WESSSSESW');
  });

  it('EWEW should become EW only', () => {
    expect(simplifyPath('ESNESEWEW')).toEqual('ESNESEW');
  });
});

describe('move functions', () => {
  let startPosition = [2, 3];

  it('should increase Y cordinate on move to north', () => {
    expect(move['N'](startPosition)).toEqual([startPosition[0], startPosition[1] + 1]);
  });

  it('should decrease Y cordinate on move to south', () => {
    expect(move['S'](startPosition)).toEqual([startPosition[0], startPosition[1] - 1]);
  })

  it('should increase X cordinate on move to east', () => {
    expect(move['E'](startPosition)).toEqual([startPosition[0] + 1, startPosition[1]]);
  })

  it('should decrease X cordinate on move to west', () => {
    expect(move['W'](startPosition)).toEqual([startPosition[0] - 1, startPosition[1]]);
  })
});

describe('nextPosition function', () => {
  const maxX = 5;
  const maxY = 5;
  it('should return the same position if the roomba is trying to go throught the wall', () => {
    let currentPosition = [0, 5];
    expect(nextPosition('N', currentPosition, maxX, maxY)).toEqual(currentPosition);
  });

  it('should return new correct position, if roomba has free place to go', () => {
    let currentPosition = [0, 5];
    expect(nextPosition('E', currentPosition, maxX, maxY)).toEqual([1, 5]);
  });
});

describe('isItPossibleToMove functions', () => {
  const maxX = 5;
  const maxY = 5;

  it('it is possible to go north if, current y position of roomba is less then the height of the room', () => {
    let currentPosition = [2, 3];
    expect(isItPossibleToMove['N'](currentPosition, maxX, maxY)).toBeTruthy();
  });

  it('it is impossible to go north if, current y position of roomba is the same as the height of the room', () => {
    let currentPosition = [2, 5];
    expect(isItPossibleToMove['N'](currentPosition, maxX, maxY)).toBeFalsy();
  });

  it('it is possible to go south if, current y position of roomba is more then 0', () => {
    let currentPosition = [2, 3];
    expect(isItPossibleToMove['S'](currentPosition, maxX, maxY)).toBeTruthy();
  });

  it('it is impossible to go south if, current y position of roomba is 0', () => {
    let currentPosition = [2, 0];
    expect(isItPossibleToMove['S'](currentPosition, maxX, maxY)).toBeFalsy();
  });

  it('it is possible to go east if, current x position of roomba is less then the width of the room', () => {
    let currentPosition = [2, 3];
    expect(isItPossibleToMove['E'](currentPosition, maxX, maxY)).toBeTruthy();
  });

  it('it is impossible to go east if, current x position of roomba is the same as the width of the room', () => {
    let currentPosition = [5, 2];
    expect(isItPossibleToMove['E'](currentPosition, maxX, maxY)).toBeFalsy();
  });

  it('it is possible to go west if, current x position of roomba is more then 0', () => {
    let currentPosition = [2, 3];
    expect(isItPossibleToMove['W'](currentPosition, maxX, maxY)).toBeTruthy();
  });

  it('it is impossible to go west if, current x position of roomba is 0', () => {
    let currentPosition = [0, 2];
    expect(isItPossibleToMove['W'](currentPosition, maxX, maxY)).toBeFalsy();
  });
});

describe('calculateRoombaPath function', () => {
  it('should return input if it has an error', () => {
    let input = {error: 'Any error here'};
    expect(calculateRoombaPath(input)).toEqual(input);
  });

  describe('input without error', () => {
    let input = {data: {
      roomSize: '5 5',
      roombaXY: '2 3',
      dustXY: ['5 7', '6 9', '0 3'],
      instruction: 'NSW',
    }};

    it('roombaPositions should have the roombaXY as a first element', () => {
      expect(calculateRoombaPath(input).data.roombaPositions[0]).toEqual(input.data.roombaXY);
    });

    it('should return roombaPositions on the valid input', () => {
      expect(calculateRoombaPath(input).data.roombaPositions).toEqual(['2 3', '2 4','2 3','1 3']);
    });

    it('should return dustXY on the valid input', () => {
      expect(calculateRoombaPath(input).data.dustXY).toEqual(input.data.dustXY);
    });
  });
});
