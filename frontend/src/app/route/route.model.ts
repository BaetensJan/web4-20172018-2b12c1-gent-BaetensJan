import {StopPlaats} from "./stopplaats/stopPlaats.model";

export class Route {

  private _id: number;
  private _naam: string;
  private _datum: Date;
  private _stopPlaatsen: StopPlaats[];


  constructor(
    naam: string,
    datum: Date,
    stopPlaatsen: StopPlaats[] = []
  ) {
    this._naam = naam;
    this._datum = datum;
    this._stopPlaatsen = stopPlaatsen;
  }

  static fromJSON(json: any): Route {
    const route = new Route(
      json.naam,
      json.datum,
      json.StopPlaats.map(StopPlaats.fromJSON)
    );
    route._id = json.id;
    return route;
  }

  toJSON() {
    return {
      id: this._id,
      naam: this._naam,
      datum: this._datum,
      stopPlaatsen: this._stopPlaatsen.map(sp => sp.toJSON())
    };
  }

  get id(): number {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }

  get datum(): Date {
    return this._datum;
  }

  get stopPlaatsen(): StopPlaats[] {
    return this._stopPlaatsen;
  }

  addStopPlaats(sp: StopPlaats) {
    this._stopPlaatsen.push(sp);
  }

  get dateString(): String {
    return `${new Date(this._datum).toDateString()} ${new Date(this._datum).toTimeString()}`;
  }
}
