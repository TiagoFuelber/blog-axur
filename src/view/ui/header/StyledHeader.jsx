import Styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/constants';
import StyledSearch from '../search/StyledSearch';

export default Styled.header`
  position: fixed;
  width: 100%;
  padding: 25px;
  background: ${COLORS.LIGHT_GREY};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 4px solid ${COLORS.LIGHT_BLUE};
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,.5);

  @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: row;
  }

  .title {
    text-transform: uppercase;
  }

  ${StyledSearch} {
    margin-top: 30px;

    @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
      margin-top: 0;
    }
  }

  #showSearch {
    position: absolute;
    right: 33px;
    top:27px;

    @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
      display: none;
    }
  }
`;
