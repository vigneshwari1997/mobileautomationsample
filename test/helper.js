import data from './data';

class helper{
    swipe (from, to) {
        driver.touchPerform([{
            action: 'press',
            options: from,
        }, {
            action: 'wait',
            options: { ms: 2000 },
        }, {
            action: 'moveTo',
            options: to,
        }, {
            action: 'release',
        }]);
        driver.pause(2000);
    }

    scroll(text){
        driver.touchScroll(x,y,element);
    }
}
module.exports = new helper();