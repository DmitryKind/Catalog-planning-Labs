var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var MarketingCentrLayoutForm = require('../PageObjects/marketing-planning-centerLayout.page6');
var ArtikelzuordnungModalForm = require('../PageObjects/marketing-planning-modal2.page8');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();
    var marketingCentrForm = new MarketingCentrLayoutForm();
    var artikelzuordnungModalForm = new ArtikelzuordnungModalForm();

    beforeAll(function () {
        browser.get(catalogPlannerUrl)
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
    it('Выбрать пункт меню Artikelzuorfnung и перейти а форму.', function () {
        marketingMenu.clickMenu(marketingMenu.menuEinkauf,marketingMenu.artikelzuordnungPunkt);
        expect(marketingMenu.formText.getText()).toEqual(data.Artikelzuordnung, 'Форма не отображается.');
    });
    it('Нажать кнопу "+",добавить новый элемент. Нажать кнопку "Anlegen".В выделенной ячейки выбрать значение.', function () {
        marketingCentrForm.buttonAddNewArtikel.click();
        artikelzuordnungModalForm.changeDataModalWindow();
        marketingCentrForm.inputEnshopNr(data.eShopNr);
        expect(marketingCentrForm.presentEshopNr.getAttribute('value')).toEqual(data.eShopNr)
    });
    it('Нажать кнопку отмены.', function () {
        marketingCentrForm.buttonCancel.click();
        expect(marketingCentrForm.presentEshopNr.getAttribute('value')).not.toEqual(data.eShopNr)
    });
});