import 'mocha';
import { expect } from 'chai';
import {convertible} from './app';

describe('Test for app.ts', () => {
    const porsche = new convertible('Porsche', 'Carrera', 2019);

    it('should output porsche\'s name', () => {
        expect(porsche.make).to.equal('Porsche');
    });

    it('should output porsche\'s model', () =>  {
        expect(porsche.model).to.equal('Carrera');
    });

    it('should output porsche\'s year of manufacture', () => {
        expect(porsche.year).to.equal(2019);
    });

});