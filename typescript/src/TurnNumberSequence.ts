export default class TurnNumberSequence {
    private static turnNumber = 0;

    public static getNextTurnNumber(): number {
      /* eslint-disable-next-line no-plusplus */
      return TurnNumberSequence.turnNumber++;
    }
}
