import { Publication } from '../domain/index';

export default ({ repository }) =>
  async ({ onSuccess, onError }) => {
    try {
      const publications = await repository.getPublications();

      onSuccess(publications.map(publication =>
        new Publication(publication)));
    } catch (err) {
      onError(err);
    }
  };
