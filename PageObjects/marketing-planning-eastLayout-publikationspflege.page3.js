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
        nummerField.clear();
        nummerField.sendKeys(nummer);
        typField.click();
        anothertypField.click();
        etField.clear();
        etField.sendKeys(et);
        preiseField.click();
        anotherPreiseField.click();
        landField.click();
        anotherlandField.click();
        kommentarField.sendKeys(kommentar);
    }
};
