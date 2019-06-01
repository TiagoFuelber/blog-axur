import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

import PublicationsRepository from './PublicationsRepository';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('PublicationsRepository', () => {
  describe('getPublications', () => {
    context('Smoke tests', () => {
      it('Should exist the getPublications method', () => {
        expect(PublicationsRepository.getPublications).to.exist;
      });
    });

    context('get a list of publications from an API - getPublications', () => {
      let fetchedStub;

      beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
      });

      afterEach(() => {
        fetchedStub.restore();
      });

      it('should call fetch method', async () => {
        const publications = await PublicationsRepository.getPublications();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', async () => {
        const publications = await PublicationsRepository.getPublications();
        expect(fetchedStub).to.have.been.calledWith(
          'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8'
        );
      });
    });
  });
});
