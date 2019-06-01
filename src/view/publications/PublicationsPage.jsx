import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '../ui/Container';
import Header from '../ui/header/Header';
import StyledBasePage from '../ui/styles/StyledBasePage';
import SelectInput from '../ui/select/SelectInput';
import StyledPublicationsPageHeader from './StyledPublicationsPageHeader';
import PublicationSummary from './PublicationSummary';
import StyledPublicationsContainer from './StyledPublicationsContainer';
import { getPublicationsAction, getAuthorsAction, changeOrderAction } from '../../state/index';
import { Publication, Author } from '../../domain';

const orderOptions = [
  { value: 'desc', text: 'From latest to oldest' },
  { value: 'asc', text: 'From oldest to latest' }
];

class PublicationsPage extends Component {
  componentDidMount() {
    const { getPublications, getAuthors } = this.props;

    getPublications();
    getAuthors();
  }

  sortPublications = (a, b) => {
    const { orderByDate } = this.props;

    return orderByDate === 'asc'
      ? a.metadata.publishedAt - b.metadata.publishedAt
      : b.metadata.publishedAt - a.metadata.publishedAt;
  }

  searchAuthor = (publication) => {
    const { authors, searchAuthorQuery } = this.props;

    const regex = new RegExp(searchAuthorQuery, 'i');
    const author = authors.filter(auth =>
      auth.id === publication.authorId)[0];

    return regex.test(author.name);
  }

  render() {
    const { publications, authors, changeOrder } = this.props;

    return (
      <StyledBasePage withHeader>
        <Header />
        <Container>
          <StyledPublicationsPageHeader>
            <h3>Publications</h3>
            <SelectInput
              label="List order"
              options={orderOptions}
              name="orderBy"
              onChange={({ target }) =>
                changeOrder(target.value)}
            />
          </StyledPublicationsPageHeader>

          <StyledPublicationsContainer>
            {!!publications.length
              && authors.length
              && publications
                .sort(this.sortPublications)
                .filter(this.searchAuthor)
                .map(publication =>
                  (
                    <PublicationSummary
                      key={publication.id}
                      publication={publication}
                      author={authors.filter(author =>
                        author.id === publication.authorId)[0].name}
                    />
                  ))}
          </StyledPublicationsContainer>
        </Container>
      </StyledBasePage>
    );
  }
}

PublicationsPage.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape(Publication)).isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape(Author)).isRequired,
  getPublications: PropTypes.func.isRequired,
  getAuthors: PropTypes.func.isRequired,
  orderByDate: PropTypes.string.isRequired,
  changeOrder: PropTypes.func.isRequired,
  searchAuthorQuery: PropTypes.string.isRequired
};

const mapStateToProps = ({ publicationListStore, authorStore }) => {
  const { publications, orderByDate, searchAuthorQuery } = publicationListStore;
  const { authors } = authorStore;

  return ({
    publications,
    orderByDate,
    searchAuthorQuery,
    authors
  });
};

const mapDispatchToProps = dispatch =>
  ({
    getPublications: getPublicationsAction(dispatch),
    getAuthors: getAuthorsAction(dispatch),
    changeOrder: changeOrderAction(dispatch)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationsPage);
