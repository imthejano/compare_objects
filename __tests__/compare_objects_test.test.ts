import compareObjects from '../src/index'

/**
 * create diferent kind of objects to compare
 */

const objA = {
	a: 1,
	b: 2,
}
const objB = {
	a: 2,
	b: 1,
}
const objC = {
	a: { a: objA, b: [objA] },
	b: 'Greetings',
}
const objD = {
	a: { a: objA, b: [objA] },
	b: 'Hello',
}
const objE = [1, 2, 3]
const objF = [3, 2, 1]
const objG = 'Hello'
const objH = 'Hellos'

describe('compare objA and objA', () => {
	it('Must return true', () => {
		expect(compareObjects(objA, objA)).toBe(true)
	})
})
describe('compare objA and objB', () => {
	it('Must return false', () => {
		expect(compareObjects(objA, objB)).toBe(false)
	})
})
describe('compare objC and objC', () => {
	it('Must return true', () => {
		expect(compareObjects(objC, objC)).toBe(true)
	})
})
describe('compare objC and objD', () => {
	it('Must return false', () => {
		expect(compareObjects(objC, objD)).toBe(false)
	})
})
describe('compare objE and objE', () => {
	it('Must return true', () => {
		expect(compareObjects(objE, objE)).toBe(true)
	})
})
describe('compare objE and objF', () => {
	it('Must return false', () => {
		expect(compareObjects(objE, objF)).toBe(false)
	})
})
describe('compare objG and objG', () => {
	it('Must return true', () => {
		expect(compareObjects(objG, objG)).toBe(true)
	})
})
describe('compare objG and objH', () => {
	it('Must return false', () => {
		expect(compareObjects(objG, objH)).toBe(false)
	})
})
