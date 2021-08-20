// Write your tests here!
const caesar = require("../src/caesar.js")
const expect = require("chai").expect;

describe("caesar", () =>{
    it("Should return false if shift = 0", () => {
        let test = caesar.caesar("a", 0)
        let expected = false
        expect(test).to.equal(expected)
    })
    it("Should return false is above 25 or below -25",() =>{
        let test = caesar.caesar('a', 26)
        let expected = false
        expect(test).to.equal(expected)
    })
    it("Should return an encoded message according to shift amount",() => {
        let test = caesar.caesar('abyz', 3)
        let expected = 'debc'
        expect(test).to.equal(expected)
    })
    it("Should return a decoded message according to shift amount",()=>{
        let test = caesar.caesar('ae', 3, false)
        let expected = 'xb'
        expect(test).to.equal(expected)
    })
    it("Should return a decoded message according to a negative shift amount",()=>{
        let test = caesar.caesar('xyz', -3, false)
        let expected = 'abc'
        expect(test).to.equal(expected)
    })
    it("Should maintain spaces in encoding", () =>{
        let test = caesar.caesar('a b', 3)
        let expected = 'd e'
        expect(test).to.equal(expected)
    })
    it("Should wrap around alphabet when negative or positive at a and z", () =>{
        let test = caesar.caesar('abc e', -3)
        let expected = 'xyz a'
        expect(test).to.equal(expected)
    })
    it("Should ignore uppercase letters", () =>{
        let test = caesar.caesar('ABC', 3)
        let expected = 'def'
        expect(test).to.equal(expected)
    })

});

