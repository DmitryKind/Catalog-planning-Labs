module.exports = MarketingModalForm;

function MarketingModalForm() {
    var that = this;

    var saisonModalField = element(by.cssContainingText('select', '31, Frühling/Sommer 2011')),
        saison31 = saisonModalField.$("[label='31, Frühling/Sommer 2011']"),
        nummerModalField = element(by.model('newPublication.name')),
        typModalField = element.all(by.cssContainingText('select', 'Inszenierungspunkt')).get(3),
        typIns = typModalField.$("[label='Inszenierungspunkt']"),
        hauptEtModalField = element(by.cssContainingText('.row.smallspacer', 'Haupt-ET')).$('input'),
        preiseModalField = $('.modal-content').element(by.cssContainingText('.row.smallspacer', 'Preise')).$('select'),
        preiseSchwarzpreis = preiseModalField.$("[label='Schwarzpreis']"),
        warenabgabe = element.all(by.cssContainingText('.row.smallspacer', 'Warenabgabe')).last(),
        warenabgabeField = warenabgabe.$('input'),
        landModalField = element.all(by.cssContainingText('select', 'Deutschland')).get(2),
        landDeutc = landModalField.$("[label='Deutschland']"),
        kommentar = element.all(by.cssContainingText('.row.smallspacer', 'Kommentar')).last(),
        kommentarModalField = kommentar.$('textarea'),
        buttonAngelen = element(by.cssContainingText('button', 'Anlegen'));

    that.saisonModalField = saisonModalField;
    that.saison31 = saison31;
    that.nummerModalField = nummerModalField;
    that.typModalField = typModalField;
    that.typIns = typIns;
    that.preiseModalField = preiseModalField;
    that.hauptEtModalField = hauptEtModalField;
    that.preiseSchwarzpreis = preiseSchwarzpreis;
    that.warenabgabeField = warenabgabeField;
    that.landModalField = landModalField;
    that.landDeutc = landDeutc;
    that.kommentarModalField = kommentarModalField;
    that.buttonAngelen = buttonAngelen;

    that.changeModalData = function (newNumber, hauptET, warenabgabe, kommentarModal) {
        return saisonModalField.click()
            .then(function () {
                return saison31.click();
            })
            .then(function () {
                return nummerModalField.clear();
            })
            .then(function () {
                return nummerModalField.sendKeys(newNumber);
            })
            .then(function () {
                return typModalField.click();
            })
            .then(function () {
                return typIns.click();
            })
            .then(function () {
                return hauptEtModalField.clear();
            })
            .then(function () {
                return hauptEtModalField.sendKeys(hauptET);
            })
            .then(function () {
                return preiseModalField.click();
            })
            .then(function () {
                return preiseSchwarzpreis.click();
            })
            .then(function () {
                return warenabgabeField.clear();
            })
            .then(function () {
                return warenabgabeField.sendKeys(warenabgabe);
            })
            .then(function () {
                return landModalField.click();
            })
            .then(function () {
                return landDeutc.click();
            })
            .then(function () {
                return kommentarModalField.sendKeys(kommentarModal);
            })
            .then(function () {
                return buttonAngelen.click();
            })
    };
}