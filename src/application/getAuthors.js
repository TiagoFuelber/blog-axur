import { Author } from '../domain/index';

export default ({ repository }) =>
  async ({ onSuccess, onError }) => {
    try {
      const authors = await repository.getAuthors();

      onSuccess(authors.map(author =>
        new Author(author)));
    } catch (err) {
      onError(err);
    }
  };
