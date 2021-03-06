module.exports = MarketingEastLayoutFormVorteile;

function MarketingEastLayoutFormVorteile() {
    var that = this;
    var nameFieldVr2 = $('.form-control.input-sm.ng-pristine.ng-valid'),
        nameFieldTestCreate = element(by.model('item.name')),
        saveButton = $("[title='Änderungen speichern']");

    that.nameFieldVr2 = nameFieldVr2;
    that.nameFieldTestCreate = nameFieldTestCreate;

    that.editNameFieldCreate = function (editName) {
        return nameFieldTestCreate.clear()
            .then(function () {
                return nameFieldTestCreate.sendKeys(editName);
            })
            .then(function () {
                return saveButton.click();
            })
    };
}