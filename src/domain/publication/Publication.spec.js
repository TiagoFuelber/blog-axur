import chai, { expect } from 'chai';
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

    // it('should have all properties of Publication', () => {
    //   expect(publication).to.be.eql(publicationInstance);
    // });

    // it('should be an instance of Publication', () => {
    //   expect(publication).to.be.an.instanceOf(Publication);
    // });

    it('Should Have a method to return the date formatted', () => {
      expect(publication.date).to.be.equal('Apr 12, 2017');
    });
  });
});
