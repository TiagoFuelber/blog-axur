import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledBasePage from '../ui/styles/StyledBasePage';
import Header from '../ui/header/Header';
import Container from '../ui/Container';
import { Publication } from '../../domain';
import { getPublication as getPublicationAction } from '../../state';
import { PUBLICATION } from '../../state/actionTypes';

class PublicationPage extends Component {
  componentDidMount() {
    const { getPublication, match } = this.props;

    getPublication(match.params.publicationId);
  }

  componentWillUnmount() {
    const { clearPublication } = this.props;
    clearPublication();
  }

  render() {
    const { authorName, publication } = this.props;

    return (
      <StyledBasePage withHeader>
        <Header />
        <Container>
          {publication && (
            <>
              <h1 style={{ fontSize: '52px' }}>{publication.title}</h1>
              <h4>{`${publication.date} | ${authorName}`}</h4>
            </>
          )}
          {publication && publication.body.split('.').map(paragraph =>
            <p>{`${paragraph}.`}</p>)}
        </Container>
      </StyledBasePage>
    );
  }
}

PublicationPage.propTypes = {
  publication: PropTypes.shape(Publication).isRequired,
  getPublication: PropTypes.func.isRequired,
  clearPublication: PropTypes.func.isRequired,
  authorName: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      publicationId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = ({ publicationStore, publicationListStore, authorStore }) => {
  const { publication, authorName } = publicationStore;
  const { publications } = publicationListStore;
  const { authors } = authorStore;
  return {
    publication,
    authorName,
    publications,
    authors
  };
};

const mapDispatchToProps = {
  getPublication: getPublicationAction,
  clearPublication: () =>
    dispatch =>
      dispatch({ type: PUBLICATION.CLEAR_PUBLICATION })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationPage);
