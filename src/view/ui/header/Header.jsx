import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StyledHeader from './StyledHeader';
import NoStyleRouterLink from '../NoStyleRouterLink';
import Search from '../search/Search';
import { IS_MOBILE } from '../styles/constants';

class Header extends Component {
  state = {
    showSearchInput: false
  };

  showSearchInput = () => {
    const { showSearchInput } = this.state;

    this.setState({ showSearchInput: !showSearchInput });
  };

  render() {
    const { showSearchInput } = this.state;

    return (
      <StyledHeader>
        <NoStyleRouterLink to="/">
          <div className="center bold title">Blog</div>
        </NoStyleRouterLink>
        <FontAwesomeIcon id="showSearch" icon={faSearch} onClick={this.showSearchInput} />
        {(!IS_MOBILE || showSearchInput) && <Search />}
        {/* {showSearchInput && <Search />} */}
      </StyledHeader>
    );
  }
}
export default Header;
