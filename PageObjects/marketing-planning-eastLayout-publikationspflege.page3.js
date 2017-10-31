module.exports = MarketingEastLayoutForm;

function MarketingEastLayoutForm() {
    var that = this;
    /* var typeMap = {

     "Prospekt": "1"
     }
     that.typeMap = typeMap;*/
    var publikationspflegeForm = element(by.id('eastLayout')),
        nummerField = $("[placeholder ='Nummer']"),
        typField = $$('select', 'Prospekt').get(1),
        etField = $$("[placeholder='ET']").get(1),
        preiseField = $$('select', 'Schwarzpreis').get(2),
        landField = $$('select', 'Deutschland').get(4),
        kommentarField = $("[placeholder='Kommentar']"),
        anotherlandField = landField.$("[label='Polen']"),
        anothertypField = typField.$("[label='Inszenierungspunkt']"),
        anotherPreiseField = preiseField.$("[label='Reduziert']"),
        buttonUndo = element(by.className('fa fa-undo')),
        inscription = element.all(by.className('cp-text-color')).first();

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
        return nummerField.clear()
            .then(function () {
                return nummerField.sendKeys(nummer);
            })
            .then(function () {
                return typField.click();
            })
            .then(function () {
                return anothertypField.click();
            })
            .then(function () {
                return etField.clear();
            })
            .then(function () {
                return etField.sendKeys(et);
            })
            .then(function () {
                return preiseField.click();
            })
            .then(function () {
                return anotherPreiseField.click();
            })
            .then(function () {
                return landField.click();
            })
            .then(function () {
                return anotherlandField.click();
            })
            .then(function () {
                return kommentarField.sendKeys(kommentar);
            })
    };
}
