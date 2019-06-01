import Styled from 'styled-components';
import { HEADER_HEIGHT } from './constants';

const StyledBasePage = Styled.div`
  ${({ withHeader }) =>
    withHeader && `margin-top: ${HEADER_HEIGHT + 30}px;`}
`;

export default StyledBasePage;
