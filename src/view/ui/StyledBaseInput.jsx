import { css } from 'styled-components';
import { COLORS } from './styles/constants';

const StyledBaseInput = css`
  background-color: white;
  height: 40px;
  padding: 8px 10px;
  color: ${COLORS.LIGHT_BLUE};
  border: 1px solid ${COLORS.LIGHT_GREY};
  font-size: 14px;

  &:focus {
    outline: 2px solid ${COLORS.LIGHT_BLUE};
  }
`;
export default StyledBaseInput;
