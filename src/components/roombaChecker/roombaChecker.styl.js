import styled from 'styled-components';
import COLORS from '../../constants/colors.js';

export const Holder = styled.div `
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const Section = styled.section `
  width: 33%;
  display: inline-block;
  vertical-align: top;
  border-right: 1px solid ${COLORS.borderColor};
  padding: 10px;
  min-height: calc(100vh - 73px);
  &:last-child {
    border-right: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    border-right: none;
  }
`;

export const SectionHeader = styled.header `
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 0;
  border-bottom: 1px solid ${COLORS.borderColor};
  margin-bottom: 10px;
`;


export const DataTextarea = styled.textarea `
  width: 100%;
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
`;

export const Button = styled.button `
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${COLORS.buttonBgColor};
  color: ${COLORS.buttonColor};
  margin: 0 .25em 10px 0;
  padding: .78571429em 1.5em;
  font-weight: 600;
  text-align: center;
  border-radius: .28571429rem;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  user-select: none;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  &:hover {
    background-color: ${COLORS.buttonBgHovColor};
    color: ${COLORS.buttonHovColor};
  }
  &:disabled {
    background: ${COLORS.buttonBgColor};
    color: ${COLORS.buttonColor};
    opacity: 0.5;
    cursor: initial;
  }
`;

export const ErrorHolder = styled.div `
  border-top: 2px solid ${COLORS.error};
  border-bottom: 2px solid ${COLORS.error};
  text-align: center;
  color: red;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
`;
