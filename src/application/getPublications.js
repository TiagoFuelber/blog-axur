import { Publication } from '../domain/index';

export default ({ repository }) =>
  async () => {
    try {
      const publications = await repository.getPublications();

      return publications.map(publication =>
        new Publication(publication));
    } catch (err) {
      throw new Error(err);
    }
  };
