import { ConstructionManagementPage } from './app.po';

describe('construction-management App', function() {
  let page: ConstructionManagementPage;

  beforeEach(() => {
    page = new ConstructionManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
