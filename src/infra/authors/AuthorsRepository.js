const getAuthors = async () => {
  try {
    const response = await fetch('http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6');
    const authors = await response.json();
    return authors;
  } catch (err) {
    throw new Error(err);
  }
};

export default { getAuthors };
