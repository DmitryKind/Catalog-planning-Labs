var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var MarketingEastLayoutFormSaisons = require('../PageObjects/marketing-planning-eastLayout-saisons.page4');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();
    var MarketingEastFormSaisons = new MarketingEastLayoutFormSaisons();

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor')
    });

    it('Выбрать пункт меню STAMMDATEN saisons и перейти а форму.', function () {
        marketingMenu.menuStammdaten.click();
        marketingMenu.saisons.click();
        expect(marketingMenu.saisons.isDisplayed()).toBe(true, 'Menu punct is not visible');
        expect(marketingMenu.saisonsFormText.getText()).toEqual('Saisons');
        expect(marketingMenu.saisonsForm.isDisplayed()).toBe(true, 'Form is not visible');
});
    it('Выбрать в списке сезон с номером 34.', function () {
        marketingTreeOfElements.saisons34.click();
        expect(MarketingEastFormSaisons.saisonsNameField.getAttribute('value')).toEqual('34');
        expect(MarketingEastFormSaisons.saisonTyp.getAttribute('value')).toEqual('Herbst/Winter 2012/2013');
        expect(MarketingEastFormSaisons.saisonStartdatum.getAttribute('value')).toEqual('01.09.2012');
        expect(MarketingEastFormSaisons.saisonEnddatum.getAttribute('value')).toEqual('28.02.2013');
    });
});