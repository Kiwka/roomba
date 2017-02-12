import ERRORS from '../constants/errors.js';

const parseRawData = input => {
  let data = input.split('\n');
  if (data.length < 3) {
    return { error: ERRORS.NOT_ENOUGH_DATA };
  }

  data = data.map(item => item.trim());

  return {data: {
    roomSize: data[0],
    roombaXY: data[1],
    dustXY: data.slice(2, data.length - 1),
    instruction: data[data.length - 1],
  }}
};

export default parseRawData;
