import * as IPFS from 'ipfs-core';
import OrbitDB from 'orbit-db';

class OrbitDBManager {
  constructor() {
    this.orbitdb = null;
    this.db = null;
  }

  async init() {
    try {
      const ipfsOptions = {
        repo: '/orbitdb/examples/browser/new/ipfs/0.33.1',
        start: true,
        preload: {
          enabled: false
        },
        EXPERIMENTAL: {
          pubsub: true
        },
        config: {
          Addresses: {
            Swarm: [
              '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
              '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
            ]
          }
        }
      };

      const ipfs = await IPFS.create(ipfsOptions);
      this.orbitdb = await OrbitDB.createInstance(ipfs);
      this.db = await this.orbitdb.keyvalue('astro-cardano-db');
      await this.db.load();
      console.log('OrbitDB initialized successfully');
    } catch (error) {
      console.error('Failed to initialize OrbitDB:', error);
    }
  }

  async addItem(key, value) {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    await this.db.put(key, value);
  }

  async getItem(key) {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    return this.db.get(key);
  }

  async getAllItems() {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    return this.db.all;
  }
}

export default new OrbitDBManager();