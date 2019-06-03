import { expect } from 'chai';
import getAuthorName from './getAuthorName';

describe('getAuthorName function', () => {
  it('should return the name of the author', () => {
    const authors = [
      {
        name: 'Jemma Chadwick',
        id: 1
      },
      {
        name: 'Nicholas Jordan',
        id: 2
      },
      {
        name: 'Zinnia Rickard',
        id: 3
      },
      {
        name: 'Sophie Hawk',
        id: 4
      }
    ];

    const authorId = 2;

    const authorName = getAuthorName(authorId, authors);

    expect(authorName).to.be.equal('Nicholas Jordan');
  });
});
