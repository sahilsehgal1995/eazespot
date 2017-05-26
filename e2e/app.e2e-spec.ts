import { EazespotPage } from './app.po';

describe('eazespot App', () => {
  let page: EazespotPage;

  beforeEach(() => {
    page = new EazespotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
