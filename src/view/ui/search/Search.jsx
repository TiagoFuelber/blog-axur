import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledSearch from './StyledSearch';
import { PUBLICATIONS } from '../../../state/actionTypes';

const Search = ({ searchAuthorByQuery, searchAuthorQuery }) =>
  (
    <StyledSearch htmlFor="search">
    Search Author:
      {' '}
      <input
        name="search"
        type="search"
        value={searchAuthorQuery}
        onChange={({ target }) =>
          searchAuthorByQuery(target.value)}
      />
    </StyledSearch>
  );

Search.propTypes = {
  searchAuthorByQuery: PropTypes.func.isRequired,
  searchAuthorQuery: PropTypes.string.isRequired
};

const mapStateToProps = ({ publicationListStore }) =>
  ({
    searchAuthorQuery: publicationListStore.searchAuthorQuery
  });

const mapDispatchToProps = dispatch =>
  ({
    searchAuthorByQuery: query =>
      dispatch({ type: PUBLICATIONS.CHANGE_AUTHOR_QUERY, searchAuthorQuery: query })
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
