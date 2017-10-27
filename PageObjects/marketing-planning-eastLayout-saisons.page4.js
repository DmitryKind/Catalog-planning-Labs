module.exports = MarketingEastLayoutFormSaisons;
function MarketingEastLayoutFormSaisons() {
    var that = this;

    var saisonsNameField = element(by.model('item.identity')),
        saisonTyp = element(by.model('item.name')),
        saisonStartdatum = element.all(by.model('dateItem')).first(),
        saisonEnddatum = element.all(by.model('dateItem')).get(1);

    that.saisonsNameField = saisonsNameField;
    that.saisonTyp = saisonTyp;
    that.saisonStartdatum = saisonStartdatum;
    that.saisonEnddatum = saisonEnddatum;

}