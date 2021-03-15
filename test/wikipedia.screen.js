import helper from './helper';
import data from './data'

const SELECTORS = {
    SEARCH_ICON: 'android=new UiSelector().descriptionContains("Search Wikipedia").className("android.widget.ImageView").index(0)',
    SEARCH_TEXTFIELD: 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    SEARCHRESULTS_CONTAINER: 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list")',
    SELECT_SEARCHCONTENT: 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_container").index(0)',
    SCROLL_ELEMENT: 'android=new UiScrollable(new UiSelector()).scrollIntoView(text("Happy Birthday to You"))',
    ELIPSE_ICON: 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/menu_overflow_button")',
    SETTINGS_BTN: 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/explore_overflow_settings")',
    PRIVACY_POLICY: 'android=new UiScrollable(new UiSelector()).scrollIntoView(text("Privacy policy"))'
}


class wikipedia{
    get searchicon() {return $(SELECTORS.SEARCH_ICON);}
    get entertext() {return $(SELECTORS.SEARCH_TEXTFIELD);}
    get searchresultcontainer() {return $(SELECTORS.SEARCHRESULTS_CONTAINER);}
    get selectsearchcontent() {return $(SELECTORS.SELECT_SEARCHCONTENT);}
    get scrollelement() {return $(SELECTORS.SCROLL_ELEMENT);}
    get elipseicon() {return $(SELECTORS.ELIPSE_ICON);}
    get settingsbtn() {return $(SELECTORS.SETTINGS_BTN);}
    get privacypolicy() {return $(SELECTORS.PRIVACY_POLICY);}

clicksearch(){
    this.searchicon.click();
    this.entertext.waitForDisplayed({
        timeout: 10000,
        reverse: !true,
    });
    this.entertext.click();
    this.entertext.setValue(data.text);
    this.searchresultcontainer.waitForDisplayed({
        timeout: 10000,
        reverse: !true,
    });
    const {height} = driver.getWindowRect();
    const anchorpoint = 50;
    const startpoint = 80;
    const endpoint = 10;
    const anchor = height *anchorpoint/100;
    const start = height *startpoint/100;
    const end = height*endpoint/100;
    helper.swipe({x:anchor,y:start},{x:anchor,y:end});
    this.scrollelement.click();
   }

   clicksettings(){
       this.elipseicon.click();
       this.settingsbtn.waitForDisplayed();
       this.settingsbtn.click();
       this.privacypolicy.waitForDisplayed();
       this.privacypolicy.click();
    }
}

module.exports = new wikipedia();