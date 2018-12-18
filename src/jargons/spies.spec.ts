import {Foo, FooCollection, Logger} from './dummy';

class FooStub implements Foo {
  public bar() {
    return 'baz';
  }
}

describe('SpySpec', () => {


  it('should log correctly', () => {
    const logger = new Logger();
    const loggerSpy = spyOn(logger, 'log').and.callThrough();
    const fooCollection = new FooCollection();
    fooCollection.add(new FooStub());
    fooCollection.add(new FooStub());
    fooCollection.logItem(0, logger);
    expect(loggerSpy).toHaveBeenCalledWith('baz');
  });
});
