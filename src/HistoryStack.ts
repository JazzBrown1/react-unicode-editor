export default class HistoryStack {
  stack: Array<any>;

  offset: number;

  current: number;

  constructor(initialState: any) {
    this.stack = new Array(30).fill(null);
    this.stack[0] = initialState;
    this.offset = 0;
    this.current = 0;
  }

  clear(initialState: any) {
    this.stack.fill(null);
    this.stack[0] = initialState;
    this.offset = 0;
    this.current = 0;
  }

  replace(state: any) {
    this.stack[this.current] = state;
  }

  add(state: any) {
    if (this.offset === this.current) {
      this.offset = (this.offset + 1) % 30;
      this.current = (this.current + 1) % 30;
      this.stack[this.current] = state;
    } else {
      let index = (this.current + 1) % 30;
      while (index !== this.offset) {
        this.stack[index] = null;
        index = (this.current + 1) % 30;
      }
      this.current = (this.current + 1) % 30;
      this.offset = this.current;
      this.stack[this.current] = state;
    }
  }

  forward() : boolean | any {
    if (this.offset === this.current) return false;
    this.current = (this.current + 1) % 30;
    return this.stack[this.current];
  }

  back() : boolean | any {
    const backOne = (this.current + 29) % 30;
    if (backOne === this.offset || !this.stack[backOne]) return false;
    this.current = backOne;
    return this.stack[this.current];
  }

  getState() {
    return this.stack[this.current];
  }
}
