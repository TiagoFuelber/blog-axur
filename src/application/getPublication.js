import { Publication } from '../domain/index';

export default (publicationId, publications) =>
  new Publication(publications.filter(publication =>
    publication.id === publicationId)[0]);
