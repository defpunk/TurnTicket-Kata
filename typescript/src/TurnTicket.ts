export default class TurnTicket {
    readonly turnNumber: number;

    readonly dispenserName: string;

    constructor(turnNumber: number, dispenserName: string) {
      this.turnNumber = turnNumber;
      this.dispenserName = dispenserName;
    }
}
