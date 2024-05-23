import TurnTicket from './TurnTicket';
import TicketDispenser from './TicketDispenser';

describe('TicketDispenser', () => {
  it('creates ticket with dispenser name and next ticket value', () => {
    const dispenser = new TicketDispenser('front');
    const ticket = dispenser.nextTurnTicket();
    expect(ticket).toEqual(new TurnTicket(0, 'front'));
  });

  // Fix this test
  it('third ticket issued has id 2', () => {
    const dispenser1 = new TicketDispenser('front');
    const dispenser2 = new TicketDispenser('side');
    const dispenser3 = new TicketDispenser('rear');
    dispenser1.nextTurnTicket();
    dispenser2.nextTurnTicket();
    const ticket3 = dispenser3.nextTurnTicket();

    expect(ticket3).toEqual(new TurnTicket(2, 'rear'));
  });
});
