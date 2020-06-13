import { existsSync } from 'fs';
import sqlite3 from 'sqlite3';

const defaultDBPath = './words.db';

class DAO {
  private connection: sqlite3.Database | null = null;

  constructor(dbPath: string = defaultDBPath) {
    if (!DAO.checkIfExists(dbPath)) {
      this.createDB(dbPath);
    }
  }

  private createDB(dbPath: string): void {
    this.connection = new sqlite3.Database(dbPath, (error) => {
      throw error;
    });
    this.connection.run(
      `CREATE TABLE words (
        id INTEGER PRIMARY KEY,
        word TEXT
        date TEXT
      )`
    );
  }

  private static checkIfExists(dbPath: string): boolean {
    return existsSync(dbPath);
  }
}
