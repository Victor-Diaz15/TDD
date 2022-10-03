import { describe, expect, it } from "vitest";
import { canReconfigure } from "../src/canReconfigure.js"


describe("canReconfigure", () => {

    // it('should be a function', () => {
    //     expect(typeof canReconfigure).toBe('function')
    // })

    it('should throw if first parameter is missing', () => {
        expect(() => canReconfigure()).toThrow()
    })

    it('should throw if first parameter is not a string', () => {
        expect(() => canReconfigure(5)).toThrow()
    })

    it('should throw if second parameter is not a string', () => {
        expect(() => canReconfigure('a')).toThrow()
    })

    it('should return a boolean', () => {
        expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
    })

    it('should return false if parameters have different length', () => {
        expect(canReconfigure('abc', 'hr')).toBe(false)
    })

    it('should return false if parameters have different length with the same unique letters', () => {
        expect(canReconfigure('hrh', 'hr')).toBe(false)
    })

    it('should return false if strings provided have different number of unique letters', () => {
        expect(canReconfigure('abc', 'hrh')).toBe(false)
    })

    it('should return false if strings has differents order of transformation', () => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })

    it('shoud return true if strings provided can be transform', () => {
        expect(canReconfigure('LIB', 'BIL')).toBe(true)
    })
})