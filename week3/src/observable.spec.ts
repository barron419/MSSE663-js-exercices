import { expect } from 'chai';
import 'mocha';
import { source } from './observable';

describe('Test for observable.ts', () => {
    it("Should output all car manufacturers", () => {
        source.subscribe(list => expect(list).to.eql(["Ford", "GMC", "Dodge", "Porsche"]))
    });
});