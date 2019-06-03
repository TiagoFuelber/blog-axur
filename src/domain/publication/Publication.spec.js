import { expect } from 'chai';
import { Publication } from '../index';

describe('publication domain', () => {
  context('should instantiate a Publication object correctly', () => {
    const publicationJson = {
      title: 'AssCo has revamped the theory of versioning',
      body:
        'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
      metadata: {
        publishedAt: 1492004832000,
        authorId: 2
      }
    };

    let publication;

    beforeEach(() => {
      publication = new Publication(publicationJson);
    });

    it("should be possible to get publication's id", () => {
      expect(publication.id).to.be.eql('assco-has-revamped-the-theory-of-versioning');
    });

    it("should be possible to get publication's title", () => {
      expect(publication.title).to.be.equal('AssCo has revamped the theory of versioning');
    });

    it("should be possible to get publication's date", () => {
      expect(publication.date).to.be.equal('Apr 12, 2017');
    });

    it("should be possible to get publication's metada", () => {
      expect(publication.metadata).to.be.eql({
        publishedAt: new Date(1492004832000),
        authorId: 2
      });
    });

    it("should be possible to get publication's author id", () => {
      expect(publication.authorId).to.be.equal(2);
    });

    it("should be possible to get publication's body", () => {
      expect(publication.body).to.be.equal(
        'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.'
      );
    });

    it('should be an instance of Publication', () => {
      expect(publication).to.be.an.instanceOf(Publication);
    });
  });
});
