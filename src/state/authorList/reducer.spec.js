import { expect } from 'chai';
import { authorsReducer } from './reducer';
import { AUTHORS } from '../actionTypes';

describe('author list reducer', () => {
  it('should return the initial state', () => {
    expect(authorsReducer(undefined, {})).to.be.eql({
      authors: []
    });
  });

  it('should update the author list', () => {
    expect(
      authorsReducer(
        {
          authors: []
        },
        { type: AUTHORS.GET_AUTHORS, authors: ['author'] }
      )
    ).to.be.eql({
      authors: ['author']
    });
  });
});
