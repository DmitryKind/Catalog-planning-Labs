module.exports = ArtikelzuordnungModalForm;

function ArtikelzuordnungModalForm() {
    var that = this;

    var modal = $('.modal-content');

    var publikationsteil = modal.element(by.cssContainingText('.row.smallspacer', 'Publikationsteil')),
        publikationsteil3911 = publikationsteil.$("[label='3911']"),
        underSeite = modal.element(by.cssContainingText('.row.smallspacer', 'nd der Seite')),
        under = underSeite.$("[label='Titel']"),
        confirmButton = modal.element(by.cssContainingText('button', 'Anlegen'));

    that.publikationsteil = publikationsteil;
    that.publikationsteil3911 = publikationsteil3911;
    that.underSeite = underSeite;
    that.under = under;
    that.confirmButton = confirmButton;

    that.changeDataModalWindow = function () {
        var EC = protractor.ExpectedConditions;
        return publikationsteil.click()
            .then(function () {
                return browser.wait(EC.visibilityOf(publikationsteil3911));
            })
            .then(function () {
                return publikationsteil3911.click();
            })
            .then(function () {
                return underSeite.click();
            })
            .then(function () {
                return browser.wait(EC.visibilityOf(under));
            })
            .then(function () {
                return under.click();
            })
            .then(function () {
                return confirmButton.click()
            })
    }
}