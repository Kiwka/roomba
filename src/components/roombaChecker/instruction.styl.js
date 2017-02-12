import styled from 'styled-components';
import COLORS from '../../constants/colors.js';

const InstructionHolder = styled.div`
  font-size: 12px;

  code {
    background: ${COLORS.codeBg};
    display: block;
    padding: 5px;
  }
`;

export default InstructionHolder;
