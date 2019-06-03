import { expect } from 'chai';
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

    it("should be possible to get author's id", () => {
      expect(author.id).to.be.eql(1);
    });

    it("should be possible to get author's name", () => {
      expect(author.name).to.be.equal('Jemma Chadwick');
    });

    it('should be an instance of Author', () => {
      expect(author).to.be.an.instanceOf(Author);
    });
  });
});
