import verifyData from './verifyData.js';
import ERRORS from '../constants/errors.js';

describe('verifyData function', () => {
  it('should return input if it has an error', () => {
    let input = {error: 'Any error here'};
    expect(verifyData(input)).toEqual(input);
  });

  describe('should return an error', () => {
    it('room size is in wrong format', () => {
      let input = {data: {
        roomSize: '5 t',
        roombaXY: '6 0',
        dustXY: ['5 7', '6 9', '0 3'],
        instruction: 'NSW',
      }};
      expect(verifyData(input).error).toEqual(ERRORS.WRONG_DATA_STRUCTURE);
    });

    it('roomba coordinates are in wrong format', () => {
      let input = {data: {
        roomSize: '5 5',
        roombaXY: '6 _',
        dustXY: ['5 7', '6 9', '0 3'],
        instruction: 'NSW',
      }};
      expect(verifyData(input).error).toEqual(ERRORS.WRONG_DATA_STRUCTURE);
    });

    it('roomba path is in wrong format', () => {
      let input = {data: {
        roomSize: '5 8',
        roombaXY: '6 0',
        dustXY: ['5 7', '____', '0 3'],
        instruction: 'NSW',
      }};
      expect(verifyData(input).error).toEqual(ERRORS.WRONG_DATA_STRUCTURE);
    });

    it('dust coordinates are in wrong format', () => {
      let input = {data: {
        roomSize: '5 5',
        roombaXY: '6 0',
        dustXY: ['5 7', '6 9', '0 3'],
        instruction: 'abcdefg',
      }};
      expect(verifyData(input).error).toEqual(ERRORS.WRONG_DATA_STRUCTURE);
    });
  });
});
