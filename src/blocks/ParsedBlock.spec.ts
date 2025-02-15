import { RawBlock } from './RawBlock';
import { ParsedBlock, EntryType, Range } from './ParsedBlock';

interface TestData {
  entry: RawBlock;
  titleParsed: string;
  author?: string;
  page?: Range;
  location?: Range;
  dateOfCreation: string;
  type: EntryType;
}

const textFixtures: TestData[] = [
  {
    entry: new RawBlock(
      'The Effective Manager (Horstman, Mark)',
      '- Your Highlight on page ix | location 247-248 | Added on Sunday, 18 February 2018 22:30:47',
      "It's about getting the most out of your direct reports,"
    ),
    titleParsed: 'The Effective Manager',
    author: 'Horstman, Mark',
    page: { display: 'ix' },
    location: { display: '247', from: 247, to: 248 },
    dateOfCreation: 'Added on Sunday, 18 February 2018 22:30:47',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      '非オタの彼女が俺の持ってるエロゲに興味津々なんだが…… (滝沢　慧;睦茸)',
      '- La subrayado en la página 197 | posición 2031-2035 | Añadido el sábado, 12 de octubre de 2019 0:37:31',
      'この部室は内側から施錠できるし、覗き窓みたいなものもない。'
    ),
    titleParsed: '非オタの彼女が俺の持ってるエロゲに興味津々なんだが……',
    author: '滝沢　慧;睦茸',
    page: { display: '197', from: 197, to: 197 },
    location: { display: '2031', from: 2031, to: 2035 },
    dateOfCreation: 'Añadido el sábado, 12 de octubre de 2019 0:37:31',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      '僕が七不思議になったわけ (メディアワークス文庫) (小川 晴央)',
      '- La subrayado en la página 14 | posición 182-183 | Añadido el lunes, 25 de noviembre de 2019 0:43:38',
      '彼女は椅子から立ち上がると、落ち葉の様なスピードでゆっくりと床に降りた。着地の際に足元の埃が舞うだけで、音は一切しない。'
    ),
    titleParsed: '僕が七不思議になったわけ (メディアワークス文庫)',
    author: '小川 晴央',
    page: { display: '14', from: 14, to: 14 },
    location: { display: '182', from: 182, to: 183 },
    dateOfCreation: 'Añadido el lunes, 25 de noviembre de 2019 0:43:38',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'Ｃｈａｏｓ；Ｃｈｉｌｄ　－Ｃｈｉｌｄｒｅｎ’ｓ　Ｒｅｖｉｖｅ－ (講談社ラノベ文庫) (ＭＡＧＥＳ．;Ｃｈｉｙｏ ｓｔ．ｉｎｃ;梅原英司)',
      '- Your Highlight on Location 35-36 | Added on Monday, July 20, 2020 12:58:07 AM',
      '軟禁状態であったことは事実なのだから、おそらく外の人間からすれば、人権を無視された酷い生活に見えたのだろう。'
    ),
    titleParsed:
      'Ｃｈａｏｓ；Ｃｈｉｌｄ　－Ｃｈｉｌｄｒｅｎ’ｓ　Ｒｅｖｉｖｅ－ (講談社ラノベ文庫)',
    author: 'ＭＡＧＥＳ．;Ｃｈｉｙｏ ｓｔ．ｉｎｃ;梅原英司',
    location: { display: '35', from: 35, to: 36 },
    dateOfCreation: 'Added on Monday, July 20, 2020 12:58:07 AM',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'Le Retour du roi (J.R.R. Tolkien)',
      '- Votre surlignement sur la page 200 | emplacement 3054-3056 | Ajouté le mercredi 16 août 2017 02:14:10',
      'Il ne nous appartient toutefois pas de rassembler toutes les marées du monde, mais de faire ce qui est en nous pour le secours des années dans lesquelles nous sommes placés, déracinant le mal dans les champs que nous connaissons, de sorte que ceux qui vivront après nous puissent avoir une terre propre à cultiver.'
    ),
    titleParsed: 'Le Retour du roi',
    author: 'J.R.R. Tolkien',
    page: { display: '200', from: 200, to: 200 },
    location: { display: '3054', from: 3054, to: 3056 },
    dateOfCreation: 'Ajouté le mercredi 16 août 2017 02:14:10',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'The Effective Manager (Horstman, Mark)',
      '- Your Highlight on page ix | location 247-248 | Added on Sunday, 18 February 2018 22:30:47',
      "It's about getting the most out of your direct reports,"
    ),
    titleParsed: 'The Effective Manager',
    author: 'Horstman, Mark',
    page: { display: 'ix' },
    location: { display: '247', from: 247, to: 248 },
    dateOfCreation: 'Added on Sunday, 18 February 2018 22:30:47',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'paulo-coehlo-the-devil-and-miss-prym  ',
      '- Your Highlight on page 14-14 | Added on Saturday, 23 December 2017 09:46:53',
      "Given the right circumstances, every human being on this earth would be willing to commit evil.'"
    ),
    titleParsed: 'paulo-coehlo-the-devil-and-miss-prym',
    page: { display: '14', from: 14, to: 14 },
    dateOfCreation: 'Added on Saturday, 23 December 2017 09:46:53',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      '如何使用 Knotes',
      '- 您在第 1 页（位置 #1-1）的标注 | 添加于 2017年11月13日星期一 上午9:00:00',
      '📖 功能栏位于左上方'
    ),
    titleParsed: '如何使用 Knotes',
    page: { display: '1', from: 1, to: 1 },
    dateOfCreation: '添加于 2017年11月13日星期一 上午9:00:00',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      "The Bogleheads' Guide to Investing - Taylor Larimore.pdf",
      '- Your Highlight on page xvi-xvi | Added on Monday, April 18, 2016 7:28:27 AM',
      'our financial markets are essentially closed systems in which an advantage garnered by a given investor comes at the disadvantage of the other investors in the same market'
    ),
    titleParsed: "The Bogleheads' Guide to Investing - Taylor Larimore.pdf",
    page: { display: 'xvi' },
    dateOfCreation: 'Added on Monday, April 18, 2016 7:28:27 AM',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'Garota exemplar (Flynn, Gillian)',
      '- Seu destaque ou posição 2829-2829 | Adicionado: sexta-feira, 29 de novembro de 2019 18:00:13',
      'Na verdade, queria que ela lesse minha mente para eu não ter de me rebaixar à arte feminina da articulação.'
    ),
    titleParsed: 'Garota exemplar',
    author: 'Flynn, Gillian',
    location: { display: '2829', from: 2829, to: 2829 },
    dateOfCreation: 'Adicionado: sexta-feira, 29 de novembro de 2019 18:00:13',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'Your Money or Your Life (Vicki Robin)',
      '-  La tua evidenziazione alla posizione 453-454 | Aggiunto in data lunedì 8 marzo 2021 22:52:57',
      'There is a way to approach life so that when asked, “Your money or your life?” you say, “I’ll take both, thank you.”'
    ),
    titleParsed: 'Your Money or Your Life',
    author: 'Vicki Robin',
    location: { display: '453', from: 453, to: 454 },
    dateOfCreation: 'Aggiunto in data lunedì 8 marzo 2021 22:52:57',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'Outliers (Gladwell, Malcolm)',
      '- Your Note at location 1971 | Added on Wednesday, 6 January 2021 14:22:58',
      'Airplane Accidents - also how software projects go wrong'
    ),
    titleParsed: 'Outliers',
    author: 'Gladwell, Malcolm',
    location: { display: '1971', from: 1971, to: 1971 },
    dateOfCreation: 'Added on Wednesday, 6 January 2021 14:22:58',
    type: 'NOTE',
  },
  {
    entry: new RawBlock(
      'The Effective Manager (Horstman, Mark)',
      '- Your Bookmark on page 136 | location 2543 | Added on Monday, 26 February 2018 11:00:31',
      ''
    ),
    titleParsed: 'The Effective Manager',
    author: 'Horstman, Mark',
    page: { display: '136', from: 136, to: 136 },
    location: { display: '2543', from: 2543, to: 2543 },
    dateOfCreation: 'Added on Monday, 26 February 2018 11:00:31',
    type: 'BOOKMARK',
  },
  {
    entry: new RawBlock(
      'Your P2K Articles (2021-04-02) (P2K)',
      '-  La tua evidenziazione alla posizione 72-73 | Aggiunto in data lunedì 5 aprile 2021 23:14:27',
      'You likely have a long list of things you want to accomplish in life. But when everything is a priority, nothing is a priority.'
    ),
    titleParsed: 'Your P2K Articles (2021-04-02)',
    author: 'P2K',
    location: { display: '72', from: 72, to: 73 },
    dateOfCreation: 'Aggiunto in data lunedì 5 aprile 2021 23:14:27',
    type: 'HIGHLIGHT',
  },
  {
    entry: new RawBlock(
      'The Big Book of Science Fiction',
      '- Your Highlight on page 1 | Location 755-756 | Added on Monday, October 19, 2020 7:32:56 PM',
      'Wells found such stunts from his rival annoying and was less interested in whether a mecha-elephant could actually clomp and clank across the earth'
    ),
    titleParsed: 'The Big Book of Science Fiction',
    page: { display: '1', from: 1, to: 1 },
    location: { display: '755', from: 755, to: 756 },
    dateOfCreation: 'Added on Monday, October 19, 2020 7:32:56 PM',
    type: 'HIGHLIGHT',
  },
];

describe('ParsedBlock', () => {
  const t = textFixtures.map((entry) =>
    Object.assign(entry, {
      toString: () => {
        return entry.titleParsed;
      },
    })
  );

  test.each(t)("Parse Parsed Block entry '%s'", (expected: TestData) => {
    const actual = new ParsedBlock(expected.entry);

    expect(actual.bookTitle).toEqual(expected.titleParsed);
    expect(actual.authors).toEqual(expected.author);
    expect(actual.page).toEqual(expected.page);
    expect(actual.location).toEqual(expected.location);
    expect(actual.dateOfCreation).toEqual(expected.dateOfCreation);
    expect(actual.type).toEqual(expected.type);
  });
});
