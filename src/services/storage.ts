class MemoryStorage {
  state: Map<string, any>;

  constructor() {
    this.state = new Map();
  }

  set(key: string, value: any) {
    this.state.set(key, value);
  }

  get(key: string) {
    return this.state.get(key) || null;
  }

  delete(key: string) {
    this.state.delete(key);
  }
}

export default MemoryStorage;
