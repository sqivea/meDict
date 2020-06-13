export default class Word {
  constructor(public word: string, public date: string) {}

  public equals(that: Word): boolean {
    return this.word === that.word && this.date === that.date;
  }
}
