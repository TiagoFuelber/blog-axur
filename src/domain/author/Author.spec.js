import chai, { expect } from 'chai';
import { Author } from './Author';

describe('author domain', () => {
  context('should instantiate an Author object correctly', () => {
    const authorJson = {
      name: 'Jemma Chadwick',
      id: 1
    };

    let author;

    beforeEach(() => {
      author = new Author(authorJson);
    });

    it('should have all properties of Author', () => {
      expect(author).to.be.eql(authorJson);
    });

    it('should be an instance of Author', () => {
      expect(author).to.be.an.instanceOf(Author);
    });
  });
});
