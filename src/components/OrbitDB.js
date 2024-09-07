class InMemoryStorage {
  constructor() {
    this.storage = {};
  }

  async init() {
    console.log('In-memory storage initialized successfully');
  }

  async addItem(key, value) {
    this.storage[key] = value;
  }

  async getItem(key) {
    return this.storage[key];
  }

  async getAllItems() {
    return this.storage;
  }
}

export default new InMemoryStorage();