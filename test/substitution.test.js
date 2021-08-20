const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () =>{
    it('Input can include spaces, letters, and special characters when encoding', () =>{
        let actual = substitution('j*vvc dj*x*', 'pemo*nijbuhvygctfxrdz-swaq', false);
        expect(actual).to.equal('hello there');
    });

    it('Alphabet argument must be exactly 26 characters, and not repeate any characters', () =>{
        let actual = substitution('zoo', 'abcdefghijklmn@pqrstuvw^-*');
        expect(actual).to.equal('*@@');
    });

    it('Spaces are maintained when decoding', () =>{
        let actual = substitution('j*vvc dj*x*', 'pemo*nijbuhvygctfxrdz-swaq', false);
        expect(actual).to.equal('hello there');
    });

    it('Spaces are maintained when encoding', () =>{
        let actual = substitution('hi there', 'pemo*nijbuhvygctfxrdz-swaq');
        expect(actual).to.equal('jb dj*x*');
    });

    it('Returns false if alphabet is longer or shorter than 26 characters', () =>{
        let highActual = substitution('zoo', 'abcdefghijklmn/pqrstuvw^-*+%#');
        let lowActual = substitution('zoo', 'abcdeuvw^-*+%#');
        expect(highActual).to.be.false;
        expect(lowActual).to.be.false;
    });

    it('Returns false if alphabet is null', () =>{
        let actual = substitution('zoo', '');
        expect(actual).to.be.false;
    });
});