import { PublicationsRepository, AuthorsRepository } from './infra';
import {
  makeGetPublications, makeGetAuthors, getPublication, getAuthorName
} from './application';

const getAuthors = makeGetAuthors({ repository: AuthorsRepository });
const getPublications = makeGetPublications({ repository: PublicationsRepository });

export {
  getAuthors, getPublications, getPublication, getAuthorName
};
