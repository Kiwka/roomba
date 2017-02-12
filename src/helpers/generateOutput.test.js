import generateOutput from './generateOutput.js';

describe('generateOutput function', () => {
  it('should return input if it has an error', () => {
    let input = {error: 'Any error here'};
    expect(generateOutput(input)).toEqual(input);
  });

  it('should return the outputData in prepared format', () => {
    let input = {
      data: {
        roombaPositions: ['1 2', '3 4', '2 3', '2 3', '7 8'],
        dustXY: ['2 3', '5 6'],
      }
    }

    expect(generateOutput(input).outputData).toEqual(`${input.data.roombaPositions[input.data.roombaPositions.length - 1]}\n1`)
  });
});
