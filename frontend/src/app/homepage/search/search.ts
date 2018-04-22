import {Station} from "../../station/Station.model";

export class Search {
  constructor(
    public fromStation: Station,
    public toStation: Station,
    public dateTime: Date,
  ) {  }

  get dateString():string
  {
    //Strip the timezone letter 'Z' from the string;

    return this.dateTime.toISOString().replace( 'Z', '' );
  }
  set dateString(value:string)
  {
    this.dateTime = new Date(value);
  }
}
