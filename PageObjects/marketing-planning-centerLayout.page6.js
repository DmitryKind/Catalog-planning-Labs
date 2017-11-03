module.exports = MarketingCentrLayoutForm;

function MarketingCentrLayoutForm() {
    var that = this;

    var addBtn = $("[title='Hinzufügen']"),
        modalWindow = $('.modal-dialog'),
        nameFieldInDialogWindow = modalWindow.$$('.form-control').last(),
        okBtn = $$('.btn.btn-default.ng-binding').first(),
        deleteBtn = $("[title='Entfernen']"),
        confirmBtn = $$('.btn.btn-default.ng-binding').first(),
        buttonAddPublikation = $("[title='Neue Publikation']"),
        buttonRemove = $("[title='Publikation löschen']"),
        buttonConfirm = element(by.cssContainingText('button', 'Ja')),
        buttonAddNewArtikel = $("[title='Neuer Artikel']"),
        ceneterLayout = $('#center'),
        enshopNrComplete = ceneterLayout.$('.htRight.tBold.htMiddle.htAutocomplete.current').$('.htAutocompleteArrow'),
        handsontableInput = ceneterLayout.$$('textarea.handsontableInput').get(1),
        presentEshopNr = $('.tab-pane.active').$('.input-sm.form-control'),
        buttonCancel = $("[title='Änderungen zurückstellen']");

    that.addBtn = addBtn;
    that.nameFieldInDialogWindow = nameFieldInDialogWindow;
    that.okBtn = okBtn;
    that.deleteBtn = deleteBtn;
    that.confirmBtn = confirmBtn;
    that.buttonAddPublikation = buttonAddPublikation;
    that.buttonRemove = buttonRemove;
    that.buttonConfirm = buttonConfirm;
    that.buttonAddNewArtikel = buttonAddNewArtikel;
    that.enshopNrComplete = enshopNrComplete;
    that.handsontableInput = handsontableInput;
    that.presentEshopNr = presentEshopNr;
    that.buttonCancel = buttonCancel;

    that.addNewElementTestCreate = function (modalNameField) {
        return addBtn.click()
            .then(function () {
                return nameFieldInDialogWindow.sendKeys(modalNameField);
            })
            .then(function () {
                return okBtn.click();
            })
    };
    that.inputEnshopNr = function (eShopNr) {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(enshopNrComplete))
            .then(function () {
                return browser.actions().sendKeys(protractor.Key.ENTER).perform();
            })
            .then(function () {
                return handsontableInput.sendKeys(eShopNr);
            })
            .then(function () {
                return browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
            })
    };
}