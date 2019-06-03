import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import PublicationsRepository from './PublicationsRepository';

chai.use(sinonChai);

global.fetch = require('isomorphic-fetch');

describe('PublicationsRepository', () => {
  describe('getPublications', () => {
    context('Smoke tests', () => {
      it('Should exist the getPublications method', () => {
        expect(PublicationsRepository.getPublications).to.exist;
      });
    });

    context('get a list of publications from an API - getPublications', () => {
      let fetchedStub;

      const mockApiResponse = (body = {}) =>
        new Response(JSON.stringify(body), {
          status: 200,
          headers: { 'Content-type': 'application/json' }
        });

      beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        global.fetch.returns(Promise.resolve(mockApiResponse()));
      });

      afterEach(() => {
        fetchedStub.restore();
      });

      it('should call fetch method', (done) => {
        const publications = PublicationsRepository.getPublications();
        expect(fetchedStub).to.have.been.calledOnce;
        done();
      });

      it('should call fetch with the correct URL', (done) => {
        const publications = PublicationsRepository.getPublications();
        expect(fetchedStub).to.have.been.calledWith(
          'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8'
        );
        done();
      });
    });
  });
});
