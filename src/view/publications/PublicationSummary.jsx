import React from 'react';
import PropTypes from 'prop-types';
import { Publication } from '../../domain/index';
import StyledPublicationSummary from './StyledPublicationSummary';

const PublicationSummary = ({ publication, author }) => {
  const {
    id, title, date, body
  } = publication;

  return (
    <StyledPublicationSummary to={`/publication/${id}`}>
      <p>{`${date} - ${author}`}</p>
      <h3>{title}</h3>
      <p className="ellipsis">{body}</p>
    </StyledPublicationSummary>
  );
};

PublicationSummary.propTypes = {
  publication: PropTypes.shape(Publication).isRequired,
  author: PropTypes.string.isRequired
};

export default PublicationSummary;
