import wikipediapage from './wikipedia.screen';
describe('wikipedia', () => {
    it('searching', () => {
        wikipediapage.clicksearch();
        driver.reset();
    });

    it.only('settings', () => {
        wikipediapage.clicksettings();
    });
    
});