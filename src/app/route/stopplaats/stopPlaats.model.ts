import {Station} from "../../station/Station.model";

export class StopPlaats {

  private _uur: string;
  private _station: Station;


  constructor(uur: string, station: Station) {
    this._uur = uur;
    this._station = station;
  }

  static fromJSON(json: any): StopPlaats {
    const stopPlaats = new StopPlaats(
      json.uur,
      Station.fromJSON(json.Stations[0])
  );
    return stopPlaats;
  }

  toJSON() {
    return {
      uur: this._uur,
      station: this._station
    };
  }

  get uur(): string {
    return this._uur;
  }

  get station(): Station {
    return this._station;
  }
}
