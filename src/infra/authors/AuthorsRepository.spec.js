import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import AuthorsRepository from './AuthorsRepository';

chai.use(sinonChai);

global.fetch = require('isomorphic-fetch');

describe('AuthorsRepository', () => {
  describe('getAuthors', () => {
    context('Smoke tests', () => {
      it('Should exist the getAuthors method', () => {
        expect(AuthorsRepository.getAuthors).to.exist;
      });
    });

    context('get a list of authors from an API - getAuthors', () => {
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
        const authors = AuthorsRepository.getAuthors();
        expect(fetchedStub).to.have.been.calledOnce;
        done();
      });

      it('should call fetch with the correct URL', (done) => {
        const authors = AuthorsRepository.getAuthors();
        expect(fetchedStub).to.have.been.calledWith(
          'http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'
        );
        done();
      });
    });
  });
});
