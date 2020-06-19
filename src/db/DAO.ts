/* Database objects. */
import { Word } from './DBObjects';

/*
  CRA's Webpack is not configured to deal with Node-only stuff.
  Need to load those modules dynamically using global
  window object.
 */
const Database = window.require('better-sqlite3');
const existsSync = window.require('fs').existsSync;

/**
 * The database default path.
 */
const defaultDBPath = './words.db';

/**
 * The main data access object definition.
 */
export default class DAO {
  private static instance: DAO | null = null;

  /**
   * SQLite3 database connection object.
   * Declared as 'any' due to inability to get
   * real types from dynamic window.require loading.
   * True type: BetterSqlite3.Database.
   */
  private connection: any = null;

  private constructor() {}

  /**
   * Singleton implementation.
   */
  public static getInstance(): DAO {
    if (!DAO.instance) {
      DAO.instance = new DAO();
    }
    return DAO.instance;
  }

  /**
   * 'Create' operation (from CRUD).
   * @param word initial word data
   */
  public create(word: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `INSERT INTO words (word, comment, date) VALUES(
        '${word.value}',
        '${word.comment}',
        '${word.date}'
      )`
    );
  }

  /**
   * 'Read' operation (from CRUD).
   * @param dateString a date for filtering words
   */
  public read(dateString: string): Word[] {
    const query = `
      SELECT *
      FROM words
      WHERE words.date = '${dateString}'
      ORDER BY words.word`;
    const rows: any[] = this.connection?.prepare(query).all() || [];
    return DAO.getWordsFromQueryResult(rows);
  }

  /**
   * 'Update' operation (from CRUD).
   * @param word the payload
   */
  public update(payload: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `UPDATE words
       SET word = '${payload.value}',
        comment = '${payload.comment}'
       WHERE id = ${payload.id}`
    );
  }

  /**
   * 'Delete' operation (from CRUD).
   * @param word what word must be deleted (used to get the id)
   */
  public delete(word: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `DELETE FROM words
       WHERE id = ${word.id}`
    );
  }

  /**
   * Initial setup of the database.
   * @param dbPath path to the database file
   */
  public setupDB(dbPath: string = defaultDBPath): void {
    const dbNotFilled = !DAO.checkIfExists(dbPath);
    this.connection = new Database(dbPath);
    if (dbNotFilled) {
      this.connection.exec(
        `CREATE TABLE words (
          id INTEGER PRIMARY KEY,
          word TEXT,
          comment TEXT,
          date TEXT
        )`
      );
    }
  }

  /**
   * Check if the database file exists.
   * @param dbPath path to the database file
   */
  private static checkIfExists(dbPath: string): boolean {
    return existsSync(dbPath);
  }

  /**
   * Transform the typeless results into a list of Word instances.
   * @param rows query result
   */
  private static getWordsFromQueryResult(rows: any[]): Word[] {
    const result: Word[] = [];
    rows.forEach((value) => {
      result.push(new Word(value.id, value.word, value.comment, value.date));
    });
    return result;
  }
}
