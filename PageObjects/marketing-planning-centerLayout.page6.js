module.exports = MarketingCentrLayoutForm;

function MarketingCentrLayoutForm() {
    var that = this;
    var addBtn = $("[title='Hinzufügen']"),
        modalWindow = $('.modal-dialog'),
        nameFieldInDialogWindow = modalWindow.$$('.form-control').last(),
        okBtn = $$('.btn.btn-default.ng-binding').first(),
        deleteBtn = $("[title='Entfernen']"),
        confirmBtn = $$('.btn.btn-default.ng-binding').first();

    that.addBtn = addBtn;
    that.nameFieldInDialogWindow = nameFieldInDialogWindow;
    that.okBtn = okBtn;
    that.deleteBtn = deleteBtn;
    that.confirmBtn = confirmBtn;

    that.addNewElementTestCreate = function (modalName) {
        addBtn.click();
        nameFieldInDialogWindow.sendKeys(modalName);
        okBtn.click();
    }
    that.deleteElementTestEdit = function () {
        deleteBtn.click();
        confirmBtn.click();
    }
}