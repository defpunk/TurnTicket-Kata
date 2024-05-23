import TurnTicket from './TurnTicket';
import TurnNumberSequence from './TurnNumberSequence';

export default class TicketDispenser {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    nextTurnTicket(): TurnTicket {
      return new TurnTicket(TurnNumberSequence.getNextTurnNumber(), this.name);
    }
}
