// Write your tests here!
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () =>{
    it("should encode a message by translating each letter to number pairs", () => {
        let test = polybius.polybius('afk')
        let expected = '111252'
        expect(test).to.equal(expected)
    })
    it("should translate both 'i' and 'j' to 42 or 42 to 'i' and 'j'", () => {
        let test = polybius.polybius('i')
        let expected = '42'
        expect(test).to.equal(expected)
    })
    it("should leave spaces as is in encoding", () => {
        let test = polybius.polybius('a b')
        let expected = '11 21'
        expect(test).to.equal(expected)
    })
    it("should leave spaces as is in decoding", () => {
        let test = polybius.polybius('11 21',false)
        let expected = 'a b'
        expect(test).to.equal(expected)
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        let test = polybius.polybius('111252',false)
        let expected = 'afk'
        expect(test).to.equal(expected)
    })
    it("should return false if the length of all numbers is odd", () => {
        let test = polybius.polybius('123456789', false)
        expect(test).to.be.false
    })
})