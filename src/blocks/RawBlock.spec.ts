import { RawBlock } from './RawBlock';

interface DataEntry {
  lines: string[];
  entry: RawBlock;
}

const sampleEntries: DataEntry[] = [
  {
    lines: [
      '1984 (Orwell, George)',
      '- Your Highlight on page 4 | location 76-77 | Added on Monday, 4 September 2017 01:51:18',
      '',
      'WAR IS PEACE',
      'FREEDOM IS SLAVERY',
      'IGNORANCE IS STRENGTH. The Ministry of Truth contained,',
    ],
    entry: new RawBlock(
      '1984 (Orwell, George)',
      '- Your Highlight on page 4 | location 76-77 | Added on Monday, 4 September 2017 01:51:18',
      `WAR IS PEACE\nFREEDOM IS SLAVERY\nIGNORANCE IS STRENGTH. The Ministry of Truth contained,`
    ),
  },
  {
    lines: [
      '',
      'Thinking, Fast and Slow (Kahneman, Daniel)',
      '- Your Highlight on Location 4823-4827 | Added on Tuesday, September 16, 2014 9:29:00 PM',
      '',
      'making against claims of bias and is typically hostile to algorithms',
    ],
    entry: new RawBlock(
      'Thinking, Fast and Slow (Kahneman, Daniel)',
      '- Your Highlight on Location 4823-4827 | Added on Tuesday, September 16, 2014 9:29:00 PM',
      `making against claims of bias and is typically hostile to algorithms`
    ),
  },
];

// eslint-disable-next-line no-undef
describe('RawBlock', () => {
  describe('createKindleClipp', () => {
    test('Parses Kindle Entry correctly', () => {
      // AAA
      sampleEntries.forEach((sampleEntry) => {
        // Arrange
        // Act
        const rawBlock = RawBlock.parse(sampleEntry.lines);

        // Assert
        expect(rawBlock).toStrictEqual(sampleEntry.entry);
      });
    });
  });
});