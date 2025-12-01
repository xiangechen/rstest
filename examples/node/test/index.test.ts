import { describe, expect, it } from '@rstest/core';

class A {
  constructor(readonly b: B) {}
}

class B {
  a: A = new A(this);
}

describe('test TypeError: Converting circular structure to JSON', () => {
  it('should throw TypeError: Converting circular structure to JSON', () => {
    const b = new B();
    expect(b.a).toEqual(undefined);
  });
});
