import parseRawData from './parseRawData.js';
import ERRORS from '../constants/errors.js';

describe('parseRawData function', () => {
  describe('when obtaine not enough data input', () => {
    let result = parseRawData('4 5\nNSW');

    it('should return an error if there less then 3 raws in the input', () => {
      expect(result.error).toEqual(ERRORS.NOT_ENOUGH_DATA);
    });
  });

  describe('when obtain enough data', () => {
    let result = parseRawData('5 5\n6 7\n4 5\nNSW');
    let resultFromDataWithSpaces = parseRawData('5 5\n      6 7\n4 5\nNSW');

    it('should return room size', () => {
      expect(result.data.roomSize).toEqual('5 5');
    });

    it('should return roomba position', () => {
      expect(result.data.roombaXY).toEqual('6 7');
    });

    it('should return dust positions', () => {
      expect(result.data.dustXY).toEqual(['4 5']);
    });

    it('should return instruction', () => {
      expect(result.data.instruction).toEqual('NSW');
    });

    it('should remove spaces around data', () => {
      expect(resultFromDataWithSpaces.data.roombaXY).toEqual('6 7');
    })
  })
});
