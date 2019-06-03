import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AUTHORS } from '../actionTypes';
import { getAuthors } from './actionCreators';

const mockedContainer = {
  getAuthors: ({ onSuccess }) =>
    onSuccess('Authors')
};

const mockStore = configureMockStore([thunk]);

describe('getAuthors action creator', () => {
  it('should return the right action', () => {
    const store = mockStore({ authors: [] });

    getAuthors()(store.dispatch, store.getState, mockedContainer);
    expect(store.getActions()).to.be.eql([{ type: AUTHORS.GET_AUTHORS, authors: 'Authors' }]);
  });
});
