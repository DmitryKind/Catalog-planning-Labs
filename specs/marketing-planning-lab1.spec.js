var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var MarketingEastLayoutForm = require('../PageObjects/marketing-planning-eastLayout-publikationspflege.page3');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();
    var marketingEastForm = new MarketingEastLayoutForm();

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor')
    });

    it('Выбрать пункт меню Publikationspflege и перейти а форму.', function () {
        marketingMenu.menuPublikationspflege.click();
        expect(marketingMenu.publikationspflegeForm.isDisplayed()).toBe(true, 'Menu punct is not visible');
        expect(marketingMenu.publikationspflegeFormText.getText()).toEqual('Publikationspflege');
        expect(marketingEastForm.publikationspflegeForm.isDisplayed()).toBe(true, 'Form is not visible');
    });

    it('Выбрать в дереве элементов "40, Herbst/Winter 2015/2016" -> Prospekt -> ' +
        '"6556 Schwarzpreis ET: 02.03.2017".',function () {
        marketingTreeOfElements.treeElementsClick();
        expect(marketingEastForm.nummerField.getAttribute('value')).toEqual("6556");
        expect(marketingEastForm.typField.getAttribute('value')).toEqual('1');
        expect(marketingEastForm.etField.getAttribute('value')).toEqual('02.03.2017');
        expect(marketingEastForm.preiseField.getAttribute('value')).toEqual('0');
    });

    it('Задать новые значения в полях формы (Nummer,Typ,Et,Preise,Land,Kommentar)', function () {
        marketingEastForm.changeDataWerbeplanung(data.nummer, data.et, data.kommentar);
        expect(marketingEastForm.nummerField.getAttribute('value')).toEqual(data.nummer);
        expect(marketingEastForm.typField.getAttribute('value')).toEqual('21');
        expect(marketingEastForm.etField.getAttribute('value')).toEqual(data.et);
        expect(marketingEastForm.preiseField.getAttribute('value')).toEqual('1');
        expect(marketingEastForm.landField.getAttribute('value')).toEqual('166');
        expect(marketingEastForm.kommentarField.getAttribute('value')).toEqual(data.kommentar);
    });

    it('Отменить изменения.', function () {
        marketingEastForm.buttonUndo.click();
        expect(marketingEastForm.nummerField.getAttribute('value')).toEqual("6556");
        expect(marketingEastForm.typField.getAttribute('value')).toEqual('1');
        expect(marketingEastForm.etField.getAttribute('value')).toEqual('02.03.2017');
        expect(marketingEastForm.preiseField.getAttribute('value')).toEqual('0');
        expect(marketingEastForm.inscription.getText()).toEqual('Wurde gespeichert');
    });
});