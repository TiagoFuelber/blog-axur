export const getPublications = async () => {
  const response = await fetch('http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8');
  const publications = await response.json();
  return publications;
};

export default { getPublications };
