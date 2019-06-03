import { expect } from 'chai';
import makeGetAuthors from './getAuthors';
import { Author } from '../domain';

describe('getAuthors function', () => {
  it('should call a repository to get authors and after should call a callback passing the result', async () => {
    const authorList = [
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

    const mockedRepository = {
      getAuthors: () =>
        Promise.resolve(authorList)
    };

    const getAuthors = makeGetAuthors({ repository: mockedRepository });

    getAuthors({
      onSuccess: authors =>
        expect(authors).to.be.eql(authorList.map(author =>
          new Author(author)))
    });
  });
});
