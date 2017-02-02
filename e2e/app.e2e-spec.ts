import { ChapeleirosFrontendAppPage } from './app.po';

describe('chapeleiros-frontend-app App', function() {
  let page: ChapeleirosFrontendAppPage;

  beforeEach(() => {
    page = new ChapeleirosFrontendAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
