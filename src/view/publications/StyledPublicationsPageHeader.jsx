import Styled from 'styled-components';
import { BREAKPOINTS } from '../ui/styles/constants';

const StyledPublicationsPageHeader = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  @media screen and (min-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: row;
  }
`;

export default StyledPublicationsPageHeader;
