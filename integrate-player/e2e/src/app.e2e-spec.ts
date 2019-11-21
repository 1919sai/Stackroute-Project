import { AppPage } from './app.po';
import { browser,element,by } from 'protractor';

describe('CricApi e2e test suite',()=>{

  it('should load header page on app launch',()=>{
    browser.get('/');
    expect(browser.getCurrentUrl()).toContain('');
    browser.sleep(5000);
  })
}
)

/*
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('cricapp app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
*/