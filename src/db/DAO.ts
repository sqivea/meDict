import sqlite3 from 'better-sqlite3';

import { Word } from './DBObjects';

const existsSync = window.require('fs').existsSync;

const defaultDBPath = process.env.REACT_APP_DB_PATH || '';

interface ReadQueryResult {
  id: number;
  word: string;
  date: string;
}

export default class DAO {
  private static instance: DAO | null = null;

  // True type: sqlite3.Database.
  private connection: any = null;

  private constructor() {}

  public static getInstance(): DAO {
    if (!DAO.instance) {
      DAO.instance = new DAO();
    }
    return DAO.instance;
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

  public read(dateString: string): Word[] {
    let result: Word[] = [];
    const query = `
      SELECT *
      FROM words
      WHERE words.date = '${dateString}'
      ORDER BY words.word`;
    /* eslint no-unused-expressions: off */
    this.connection?.all(query, (error: Error | null, rows: any[]) => {
      result = error ? [] : DAO.getWordsFromQueryResult(rows);
    });
    return result;
  }

  public update(payload: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `UPDATE words
       SET word = ${payload.value},
       WHERE id = ${payload.id}`
    );
  }

  public delete(word: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `DELETE FROM words
       WHERE id = ${word.id}`
    );
  }

  public setupDB(dbPath: string = defaultDBPath): void {
    const dbNotFilled = !DAO.checkIfExists(dbPath);
    this.connection = new sqlite3.Database(
      dbPath,
      (error: Error | null) => {
        throw error;
      }
    );
    if (dbNotFilled) {
      this.connection.run(
        `CREATE TABLE words (
          id INTEGER PRIMARY KEY,
          word TEXT,
          comment TEXT,
          date TEXT
        )`
      );
    }
  }

  private static checkIfExists(dbPath: string): boolean {
    return existsSync(dbPath);
  }

  private static getWordsFromQueryResult(rows: ReadQueryResult[]): Word[] {
    const result: Word[] = [];
    rows.forEach((value) => {
      result.push(new Word(value.id, value.word, value.date));
    });
    return result;
  }
}
