import { PUBLICATION } from '../actionTypes';
import { showLoader, hideLoader } from '../loader/actionCreators';

const updateAuthorName = (dispatch, container, authorId) =>
  (authors) => {
    const authorName = container.getAuthorName(authorId, authors);

    dispatch({
      type: PUBLICATION.GET_AUTHOR_NAME,
      authorName
    });
    dispatch(hideLoader());
  };

const getAuthorName = (dispatch, getState, container) => {
  const authorsFromStore = getState().authorStore.authors;
  const { authorId } = getState().publicationStore.publication;

  if (!authorsFromStore.length) {
    container.getAuthors({
      onSuccess: updateAuthorName(dispatch, container, authorId),
      onError: (err) => {
        dispatch(hideLoader());
        throw new Error(err);
      }
    });
  } else {
    updateAuthorName(dispatch, container, authorId)(authorsFromStore);
  }
};

const updatePublication = (dispatch, getState, container, publicationId) =>
  (publications) => {
    const publication = container.getPublication(publicationId, publications);
    dispatch({
      type: PUBLICATION.GET_PUBLICATION,
      publication
    });
    getAuthorName(dispatch, getState, container);
  };

export const getPublication = publicationId =>
  (dispatch, getState, container) => {
    dispatch(showLoader());
    const publicationsFromStore = getState().publicationListStore.publications;

    if (!publicationsFromStore.length) {
      container.getPublications({
        onSuccess: updatePublication(dispatch, getState, container, publicationId),
        onError: (err) => {
          dispatch(hideLoader());
          throw new Error(err);
        }
      });
    } else {
      updatePublication(dispatch, getState, container, publicationId)(publicationsFromStore);
    }
  };
