export class Disruption {
  private _id : number;
  private _titel : string;
  private _bericht : string;
  private _datumtijd : Date;
  private _dateAdded : Date;
  private _dateUpdated : Date;

  constructor(
    id : number,
    titel :string,
    bericht : string,
    datumtijd : Date,
    dateAdded: Date = null,
    dateUpdated: Date = null)
  {
    this._id = id;
    this._titel = titel
    this._bericht = bericht;
    this._datumtijd = datumtijd;
    this._dateAdded = dateAdded;
    this._dateUpdated = dateUpdated;
  }

  static fromJSON(json: any): Disruption {
    const disruption = new Disruption(
      json.id,
      json.titel,
      json.bericht,
      json.datumtijd,
      json.createdAt,
      json.updatedAt
    );
    disruption._id = json.id;
    disruption._titel = json.titel;
    disruption._bericht = json.bericht;
    disruption._datumtijd = json.datumtijd;
    disruption._dateAdded = json.createdAt;
    disruption._dateUpdated = json.updatedAt;
    return disruption;
  }

  toJSON() {
    return {
      id: this._id,
      titel: this._titel,
      bericht: this._bericht,
      datumtijd: this._datumtijd,
      createdAt: this._dateAdded,
      updatedAt: this._dateUpdated
    };
  }

  get id(): number {
    return this._id;
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
  get createdAt(): Date {
    return this._dateAdded;
  }
  get updatedAt(): Date {
    return this._dateUpdated;
  }

}
