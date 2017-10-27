module.exports = MarketingEastLayoutForm;
function MarketingEastLayoutForm() {
    var that = this;

    var publikationspflegeForm = element(by.id('eastLayout')),
        nummerField = element(by.model('publication.name')),
        typField = element(by.model('publication.type')),
        etField = element(by.model('dateItem')),
        preiseField = element(by.model('publication.priceType')),
        landField = element(by.model('publication.country')),
        kommentarField = element(by.model('publication.description')),
        anotherlandField = element(by.model('publication.country')).$("[value='166']"),
        anothertypField = element(by.model('publication.type')).$("[value='21']"),
        anotherPreiseField = element(by.model('publication.priceType')).$("[value='1']"),
        buttonUndo = element(by.className('fa fa-undo')),
        inscription = element(by.className('cp-text-color'));

    that.publikationspflegeForm = publikationspflegeForm;
    that.nummerField = nummerField;
    that.typField = typField;
    that.etField = etField;
    that.preiseField = preiseField;
    that.anothertypField = anothertypField;
    that.anotherPreiseField = anotherPreiseField;
    that.landField = landField;
    that.anotherlandField = anotherlandField;
    that.kommentarField = kommentarField;
    that.buttonUndo = buttonUndo;
    that.inscription = inscription;

    that.changeDataWerbeplanung = function (nummer, et, kommentar) {
        nummerField.clear();
        nummerField.sendKeys(nummer);
        typField.click();
        browser.sleep(1000);
        anothertypField.click();
        etField.clear();
        etField.sendKeys(et);
        preiseField.click();
        browser.sleep(1000);
        anotherPreiseField.click();
        browser.sleep(1000);
        landField.click();
        browser.sleep(1000);
        anotherlandField.click();
        browser.sleep(1000);
        kommentarField.sendKeys(kommentar);
    }
}