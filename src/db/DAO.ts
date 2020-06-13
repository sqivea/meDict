import { existsSync } from 'fs';
import sqlite3 from 'sqlite3';

import { Word } from './DBObjects';

const defaultDBPath = './words.db';

interface ReadQueryResult {
  word: string;
  date: string;
}

class DAO {
  private connection: sqlite3.Database | null = null;

  constructor(dbPath: string = defaultDBPath) {
    if (!DAO.checkIfExists(dbPath)) {
      this.createDB(dbPath);
    }
  }

  public create(word: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `INSERT INTO words VALUES(
        '${word.value}',
        '${word.date}'
      )`
    );
  }

  public read(date: Date): Word[] {
    let result: Word[] = [];
    /* eslint no-unused-expressions: off */
    this.connection?.all(
      `SELECT *
       FROM words
       WHERE words.date = ${date.toUTCString()}
       ORDER BY words.word`,
      (error, rows) => {
        if (error) throw error;
        result = DAO.getWordsFromQueryResult(rows);
      }
    );
    return result;
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

  private static getWordsFromQueryResult(rows: ReadQueryResult[]): Word[] {
    const result: Word[] = [];
    rows.forEach((value) => {
      result.push(new Word(value.word, value.date));
    });
    return result;
  }
}
