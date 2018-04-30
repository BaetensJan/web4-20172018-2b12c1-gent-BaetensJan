
export class Station {
  private _naam: string;

  constructor(
    naam: string
  ) {
    this._naam = naam;
  }

  static fromJSON(json: any): Station {
    const station = new Station(
      json.naam
    );
    station._naam = json.naam;
    return station;
  }

  toJSON() {
    return {
      naam: this._naam
    };
  }

  get naam(): string {
    return this._naam;
  }

}
