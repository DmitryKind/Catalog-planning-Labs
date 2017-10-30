module.exports = MarketingEastLayoutFormSaisons;

function MarketingEastLayoutFormSaisons() {
    var that = this;
    var fieldSaisonsName = $$('input', '34').first(),
        fieldSaisonTyp = $$('.form-control.input-sm.ng-pristine.ng-valid.ng-touched').get(1),
        fieldSaisonStartdatum = $$('.ng-isolate-scope.ng-valid-date.ng-valid.ng-valid-required').first(),
        fieldSaisonEnddatum =$$('.ng-isolate-scope.ng-valid-date.ng-valid.ng-valid-required').last();

    that.fieldSaisonsName = fieldSaisonsName;
    that.fieldSaisonTyp = fieldSaisonTyp;
    that.fieldSaisonStartdatum = fieldSaisonStartdatum;
    that.fieldSaisonEnddatum = fieldSaisonEnddatum;
}