import { QboardPage } from './app.po';

describe('qboard App', () => {
  let page: QboardPage;

  beforeEach(() => {
    page = new QboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
