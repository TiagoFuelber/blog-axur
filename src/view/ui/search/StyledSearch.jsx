import Styled from 'styled-components';
import searchIcon from '../../../images/search.svg';
import StyledBaseInput from '../StyledBaseInput';
import { BREAKPOINTS } from '../styles/constants';

const StyledSearch = Styled.label`
  input {
    ${StyledBaseInput}

    cursor: pointer;
    padding-left: 40px;
    position: relative;
    margin: 10px 0 0;
    width: 100%;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: left 10px center;

    @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
      width: 200px;
      margin: 0 0 0 10px;
    }
  }
`;

export default StyledSearch;
