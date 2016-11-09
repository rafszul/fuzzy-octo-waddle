import { ProjektKreatywaPage } from './app.po';

describe('projekt-kreatywa App', function() {
  let page: ProjektKreatywaPage;

  beforeEach(() => {
    page = new ProjektKreatywaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
