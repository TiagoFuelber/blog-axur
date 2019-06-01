import React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { PublicationPage, PublicationsPage, GlobalStyle } from './view';
import Loader from './view/ui/loader/Loader';

const Router = ({ showLoader }) =>
  (
    <HashRouter>
      <Normalize />
      <GlobalStyle />
      {showLoader && <Loader />}
      <Route exact path="/" component={PublicationsPage} />
      <Route exact path="/publication/:publicationId" component={PublicationPage} />
    </HashRouter>
  );

Router.propTypes = {
  showLoader: PropTypes.bool.isRequired
};

const mapStateToProps = ({ showLoader }) =>
  ({ showLoader });

export default connect(mapStateToProps)(Router);
