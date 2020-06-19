/**
 * Representation of a word (value object).
 */
export class Word {
  constructor(
    public id?: number,
    public value?: string,
    public comment?: string,
    public date?: string
  ) {}

  public equals(that: Word): boolean {
    return this.value === that.value && this.date === that.date;
  }
}
