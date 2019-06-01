export const BREAKPOINTS = {
  MOBILE: '700px'
};

export const IS_MOBILE = window.innerWidth <= parseInt(BREAKPOINTS.MOBILE, 10);

export const HEADER_HEIGHT = IS_MOBILE ? 45 : 90; // px

export const COLORS = {
  LIGHT_GREY: '#f5f6f7',
  DARK_GREY: '#454d57',
  LIGHT_BLUE: '#1861bf'
};

export default { COLORS, BREAKPOINTS, HEADER_HEIGHT };
