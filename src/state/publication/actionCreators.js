import {
  getPublication, getPublications, getAuthors, getAuthorName
} from '../../container';
import { PUBLICATION } from '../actionTypes';
import { showLoader, hideLoader } from '../loader/actionCreators';

export const getAuthorNameAction = async (authorId) => {
  const authors = await getAuthors();
  const authorName = getAuthorName(authorId, authors);

  return { type: PUBLICATION.GET_AUTHOR_NAME, authorName };
};

export const getPublicationAction = dispatch =>
  async (publicationId) => {
    dispatch(showLoader());
    const publications = await getPublications();
    const publication = getPublication(publicationId, publications);

    dispatch(await getAuthorNameAction(publication.authorId));
    dispatch({ type: PUBLICATION.GET_PUBLICATION, publication });
    dispatch(hideLoader());
  };
