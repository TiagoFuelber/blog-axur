import Styled from 'styled-components';
import NoStyleRouterLink from '../ui/NoStyleRouterLink';
import { COLORS } from '../ui/styles/constants';

const StyledPublicationSummary = Styled(NoStyleRouterLink)`
  padding: 15px;
  box-shadow: 0 1px 3px 0 hsla(212,7%,45%,.32);
  display: inline-grid;

  &:hover {
    background: ${COLORS.LIGHT_GREY};
  }
`;

export default StyledPublicationSummary;
