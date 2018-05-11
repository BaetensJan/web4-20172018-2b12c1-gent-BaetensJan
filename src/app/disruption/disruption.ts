export class Disruption {
  private _titel : string;
  private _bericht : string;
  private _datumtijd : Date;

  constructor(
    titel :string,
    bericht : string,
    datumtijd : Date)
  {
    this._titel = titel
    this._bericht = bericht;
    this._datumtijd = datumtijd;
  }

  static fromJSON(json: any): Disruption {
    const disruption = new Disruption(
      json.titel,
      json.bericht,
      json.datumtijd
    );
    disruption._titel = json.titel;
    disruption._bericht = json.bericht;
    disruption._datumtijd = json.datumtijd;
    return disruption;
  }

  toJSON() {
    return {
      titel: this._titel,
      bericht: this._bericht,
      datumtijd: this._datumtijd,
    };
  }

  get titel(): string {
    return this._titel;
  }
  get bericht(): string {
    return this._bericht;
  }
  get datumtijd(): Date {
    return this._datumtijd;
  }

}
