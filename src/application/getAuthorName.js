import { Author } from '../domain/index';

export default (authorId, authors) => {
  try {
    return new Author(authors.filter(author =>
      author.id === authorId)[0]).name;
  } catch (error) {
    throw new Error(error);
  }
};
