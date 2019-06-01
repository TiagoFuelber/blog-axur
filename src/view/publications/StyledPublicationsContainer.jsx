import Styled from 'styled-components';
import { BREAKPOINTS } from '../ui/styles/constants';

const StyledPublicationsContainer = Styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto;

  @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: repeat(3, auto);
  }
`;

export default StyledPublicationsContainer;
