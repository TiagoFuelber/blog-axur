import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Lato;
  }

  body, h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  .center {
    text-align: center;
  }

  .upper {
    text-transform: uppercase;
  }

  .bold {
    font-weight: 800;
  }

  /* .red {
    color: ${COLORS.LightRed};
  } */

  a {
    color: ${COLORS.LIGHT_BLUE};
  }

  p {
    color: ${COLORS.DARK_GREY};
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
