var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();

    beforeAll(function () {
        browser.get(catalogPlannerUrl)
    });
    afterAll(function () {
        browser.manage().deleteCookie('selectedPublicationId');
        browser.manage().deleteCookie('selectedPublicationTypeId');
    });

    it('Выбрать пункт меню Publikationspflege и перейти а форму.', function () {
        marketingMenu.publikationspflegePunkt.click();
        expect(marketingMenu.formText.getText()).toEqual(data.Publikationspflege, 'Форма не отображается.');
    });
    it('В дереве публикаций выбрать 39,Fruhling/Sommer->Inszenierungspunkt->3911SchwarzpreisET:04.03.2016.', function () {
        marketingTreeOfElements.treeElementsClick(marketingTreeOfElements.unit39Sommer
            , marketingTreeOfElements.unitInszenierungspunkt
            , marketingTreeOfElements.unit3911Schwarzpreis);
    });
        it('Выбрать пункт меню Seitenplanung и перейти а форму.', function () {
        marketingMenu.clickMenu(marketingMenu.menuEinkauf,marketingMenu.seitenplanungPunkt);
        expect(marketingMenu.formText.getText()).toEqual(data.Seitenplanung, 'Форма не отображается.');
    });
    });