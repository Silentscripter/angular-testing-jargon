import {Foo, FooCollection} from './dummy';

class FooStub implements Foo {
  public bar(): string {
    return 'baz';
  }
}

describe('StubSpec', () => {


  it('should join correctly', () => {
    const fooCollection = new FooCollection();
    fooCollection.add(new FooStub());
    fooCollection.add(new FooStub());
    expect(fooCollection.joined()).toEqual('bazbaz');
  });
});
