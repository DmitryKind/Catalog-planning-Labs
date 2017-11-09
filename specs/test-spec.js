var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var menu = $$('.text-justify');
    beforeAll(function () {
        browser.get(catalogPlannerUrl)
    });

    it('Выбрать пункт меню Publikationspflege и использовать Promise.all.', function () {

        marketingMenu.publikationspflegePunkt.click()
            .then(function () {
                return protractor.promise.all([
                    $('div div span').getText(),
                    element(by.id('header')).getText()
                ]);
            })
            .then(function (results) {
                console.log(results);
            })
    });
    it('Метод мар.', function () {
        var items = menu.map(function (elm) {
            return elm.getText();
        });
        expect(items).toEqual([
            'MARKETING', 'EINKAUF', 'BERICHTE', 'KALENDAR', 'STAMMDATEN'
        ]);
    });
    it('Метод each.', function () {
        menu.each(function (element, index) {
            element.getText().then(function (text) {
                console.log(index, text);
            });
        });
    });
    it('Метод filter.', function () {
        menu.filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'EINKAUF';
            });
        }).first().click();
    });
});
