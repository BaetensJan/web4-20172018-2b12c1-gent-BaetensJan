
export class Station {
  private _naam: string;
  private _dateAdded: Date;
  private _dateUpdated: Date;

  constructor(
    naam: string,
    dateAdded: Date = null,
    dateUpdated: Date = null)
  {
    this._naam = naam;
    this._dateAdded = dateAdded;
    this._dateUpdated = dateUpdated;
  }

  static fromJSON(json: any): Station {
    const station = new Station(
      json.naam,
      json.createdAt,
      json.updatedAt
    );
    station._naam = json.naam;
    station._dateAdded = json.createdAt;
    station._dateUpdated = json.updatedAt;
    return station;
  }

  toJSON() {
    return {
      naam: this._naam,
      createdAt: this._dateAdded,
      updatedAt: this._dateUpdated
    };
  }

  get naam(): string {
    return this._naam;
  }
  get createdAt(): Date {
    return this._dateAdded;
  }
  get updatedAt(): Date {
    return this._dateUpdated;
  }

}
