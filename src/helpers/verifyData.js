import {XYRegExp, instructionRegExp} from '../constants/regexp.js';
import ERRORS from '../constants/errors.js';

const verifyData = input => {
  if (input.error) {
    return input;
  }

  if (!XYRegExp.test(input.data.roomSize) ||
      !XYRegExp.test(input.data.roombaXY) ||
      !instructionRegExp.test(input.data.instruction) ||
      input.data.dustXY.some(xy => !XYRegExp.test(xy))) {
      return {error: ERRORS.WRONG_DATA_STRUCTURE}
  }

  return input;
};

export default verifyData;
