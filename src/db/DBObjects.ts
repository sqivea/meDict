export class Word {
  constructor(public value: string, public date: string) {}

  public equals(that: Word): boolean {
    return this.value === that.value && this.date === that.date;
  }
}
