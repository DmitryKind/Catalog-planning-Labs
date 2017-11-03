var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var MarketingCentrLayoutForm = require('../PageObjects/marketing-planning-centerLayout.page6');
var MarketingModalForm = require('../PageObjects/marketing-planning-modalDialog.page7');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();
    var marketingCentrForm = new MarketingCentrLayoutForm();
    var marketingModal = new MarketingModalForm();

    beforeAll(function () {
        browser.get(catalogPlannerUrl)
    });

    it('Выбрать пункт меню Publikationspflege и перейти а форму.', function () {
        marketingMenu.publikationspflegePunkt.click();
        expect(marketingMenu.formText.getText()).toEqual(data.Publikationspflege, 'Форма не отображается.');

    });
   it('Нажать вверху на кнопку "+", добавить новую публикацию. Нажать на кнопку "Anlegen".', function () {
       marketingCentrForm.buttonAddPublikation.click();
       marketingModal.changeModalData(newNumber, data.hauptET, data.warenabgabe, data.kommentarModal);
       browser.wait(ExpectedConditions.visibilityOf(marketingTreeOfElements.newPublication));
       expect(marketingTreeOfElements.newPublication.isPresent()).toBe(true, 'Публикация не добавлена.');
    });
    it('Выделить созданную публкацию.Нажать кнопку удаления публикации.', function () {
        marketingTreeOfElements.newPublication.click();
        marketingCentrForm.buttonRemove.click();
        marketingCentrForm.buttonConfirm.click();
        expect(marketingCentrForm.buttonRemove.isEnabled()).toBe(true, 'Кнопка недоступна.');
        expect(marketingTreeOfElements.newPublication.isPresent()).toBe(false, 'Публикация отсутствует.');
    });
});



