import { describe, expect, it } from '@rstest/core';

class A {
  c: C | undefined;
  constructor(readonly b: B) {}
}

class B {
  a: A = new A(this);
}

class C {
  next: C | undefined;
  constructor(readonly b: B) {}
}

describe('test TypeError: Converting circular structure to JSON', () => {
  it('should throw TypeError: Converting circular structure to JSON', () => {
    const b = new B();
    expect(b.a.c?.next).toEqual(new C(b));
  });
});
