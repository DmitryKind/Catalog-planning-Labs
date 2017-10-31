var MarketingPlanningMenu = require('../PageObjects/marketing-planning-menu.page1');
var MarketingTreeOfElements = require('../PageObjects/marketing-planning-treeOfElements.page2');
var MarketingEastLayoutFormVorteile = require('../PageObjects/marketing-planning-eastLayout-vorteile.page5');
var MarketingCentrLayoutForm = require('../PageObjects/marketing-planning-centerLayout.page6');
var data = require('../data/data.json');

describe('Interaction with catalog-planning', function () {
    var marketingMenu = new MarketingPlanningMenu();
    var marketingTreeOfElements = new MarketingTreeOfElements();
    var marketingEastFormVorteile = new MarketingEastLayoutFormVorteile();
    var marketingCentrLayoutForm = new MarketingCentrLayoutForm();

    beforeAll(function () {
        browser.get(catalogPlannerUrl)
    });

    it('Выбрать пункт меню STAMMDATEN vorteile и перейти а форму.', function () {
        marketingMenu.clickMenuVorteile();
        expect(marketingMenu.vorteile.isDisplayed()).toBe(true, 'Menu punct is not visible');
        expect(marketingMenu.vorteileFormText.getText()).toEqual('PuC.Marketing Vorteile');
    });

    it('Выбрать в списке строку с названием VR_2.', function () {
        marketingTreeOfElements.vorteileVr2.click();
        expect(marketingEastFormVorteile.nameFieldVr2.getAttribute('value')).toEqual(data.vorteileName);
    });

    it('Вверху списка нажать на кнопку "+" добваить новый элемент.Ввести в диалоговом окне "Test_create.', function () {
        marketingCentrLayoutForm.addNewElementTestCreate(data.modalNameField);
        expect(marketingTreeOfElements.newName.getText()).toEqual(data.modalNameField);
    });

    it('Выделить строку с созданным элементом "Test_create. Изменить значение поля Name на "Test_edit.' +
        'Нажать кнопку сохранить."', function () {
        marketingTreeOfElements.vorteileTestCreate.click();
        marketingEastFormVorteile.editNameFieldCreate(data.editName);
        expect(marketingTreeOfElements.newName.getText()).toEqual(data.editName);
    });

    it('Выделить строку с созданным элементом "Test_edit.Нажать кнопку удаления элемента', function () {
        marketingTreeOfElements.vorteileTestEdit.click();
        marketingCentrLayoutForm.deleteElementTestEdit();
        expect(marketingCentrLayoutForm.deleteBtn.isDisplayed()).toBe(true);
        expect(marketingTreeOfElements.vorteileTestEdit.getText()).not.toEqual(data.modalNameField);
    });
});