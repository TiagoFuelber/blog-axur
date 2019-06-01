import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import AuthorsRepository from './AuthorsRepository';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('AuthorsRepository', () => {
  describe('getAuthors', () => {
    context('Smoke tests', () => {
      it('Should exist the getAuthors method', () => {
        expect(AuthorsRepository.getAuthors).to.exist;
      });
    });

    context('get a list of authors from an API - getAuthors', () => {
      let fetchedStub;

      beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
      });

      afterEach(() => {
        fetchedStub.restore();
      });

      it('should call fetch method', async () => {
        const authors = await AuthorsRepository.getAuthors();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', async () => {
        const authors = await AuthorsRepository.getAuthors();
        expect(fetchedStub).to.have.been.calledWith(
          'http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'
        );
      });
    });
  });
});
