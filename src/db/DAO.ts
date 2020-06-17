import { Word } from './DBObjects';

const Database = window.require('better-sqlite3');
const existsSync = window.require('fs').existsSync;

const defaultDBPath = process.env.REACT_APP_DB_PATH || '';

export default class DAO {
  private static instance: DAO | null = null;

  // True type: BetterSqlite3.Database.
  private connection: any = null;

  private constructor() {}

  public static getInstance(): DAO {
    if (!DAO.instance) {
      DAO.instance = new DAO();
    }
    return DAO.instance;
  }

  public create(word: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `INSERT INTO words VALUES(
        '${word.value}',
        '${word.comment}',
        '${word.date}'
      )`
    );
  }

  public read(dateString: string): Word[] {
    const query = `
      SELECT *
      FROM words
      WHERE words.date = '${dateString}'
      ORDER BY words.word`;
    const rows: any[] = this.connection?.prepare(query).all() || [];
    return DAO.getWordsFromQueryResult(rows);
  }

  public update(payload: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `UPDATE words
       SET word = '${payload.value}',
        comment = '${payload.comment}'
       WHERE id = ${payload.id}`
    );
  }

  public delete(word: Word): void {
    /* eslint-disable-next-line no-unused-expressions */
    this.connection?.exec(
      `DELETE FROM words
       WHERE id = ${word.id}`
    );
  }

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

  private static checkIfExists(dbPath: string): boolean {
    return existsSync(dbPath);
  }

  private static getWordsFromQueryResult(rows: any[]): Word[] {
    const result: Word[] = [];
    rows.forEach((value) => {
      result.push(new Word(value.id, value.word, value.comment, value.date));
    });
    return result;
  }
}
