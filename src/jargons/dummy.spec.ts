import {Foo, FooCollection} from './dummy';

class FooDummy implements Foo {
  public bar(): string {
    return null;
  }
}

describe('Dummy', () => {

  it('should count correctly', () => {
    const fooCollection = new FooCollection();
    fooCollection.add(new FooDummy());
    fooCollection.add(new FooDummy());
    expect(fooCollection.count()).toEqual(2);
  });
});
