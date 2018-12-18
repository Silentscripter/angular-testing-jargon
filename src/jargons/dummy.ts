export interface Foo {
  bar(): string;
}

export class FooCollection {
  private foos: Foo[] = [];

  add(item: Foo) {
    this.foos = [...this.foos, item];
  }

  count(): number {
    return this.foos.length;
  }

  joined(): string {
    return this.foos.map(foo => foo.bar()).join('');
  }

  logItem(id: number, logger: Logger): void {
    logger.log(this.foos[id].bar());
  }
}

export class Logger {

  public log(message: string): void {
    console.log(message);
  }
}
