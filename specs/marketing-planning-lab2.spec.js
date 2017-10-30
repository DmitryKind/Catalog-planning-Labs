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
        expect(MarketingEastFormSaisons.fieldSaisonsName.getAttribute('value')).toEqual(data.Name);
        expect(MarketingEastFormSaisons.fieldSaisonTyp.getAttribute('value')).toEqual(data.Saisontyp);
        expect(MarketingEastFormSaisons.fieldSaisonStartdatum.getAttribute('value')).toEqual(data.Startdatum);
        expect(MarketingEastFormSaisons.fieldSaisonEnddatum.getAttribute('value')).toEqual(data.Enddatum);
    });
});