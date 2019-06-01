import { Author } from '../domain/index';

export default ({ repository }) =>
  async () => {
    try {
      const authors = await repository.getAuthors();

      return authors.map(author =>
        new Author(author));
    } catch (err) {
      throw new Error(err);
    }
  };
