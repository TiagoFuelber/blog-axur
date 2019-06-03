const getBaseButtonStyle = (width = 'auto') =>
  `
    color: white;
    border: none;
    padding: 10px;
    font-size: 18px;
    width: ${width};
    transition: transform 0.5s;

    :hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  `;

export default getBaseButtonStyle;
