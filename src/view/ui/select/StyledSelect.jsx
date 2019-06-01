import Styled from 'styled-components';
import StyledBaseInput from '../StyledBaseInput';
import arrowDown from '../../../images/arrow-down.svg';

const StyledSelect = Styled.select`
  ${StyledBaseInput}

  margin-left: 10px;
  padding-right: 40px;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: auto 50%;
  appearance: none;

  &::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
