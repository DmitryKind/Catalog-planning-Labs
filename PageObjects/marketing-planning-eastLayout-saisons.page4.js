module.exports = MarketingEastLayoutFormSaisons;

function MarketingEastLayoutFormSaisons() {
    var that = this;
    var saisonsNameField = $$('input', '34').first(),
        saisonTypField = $$('.form-control.input-sm.ng-pristine.ng-valid.ng-touched').get(1),
        saisonStartdatumField = $$('.ng-isolate-scope.ng-valid-date.ng-valid.ng-valid-required').first(),
        saisonEnddatumField = $$('.ng-isolate-scope.ng-valid-date.ng-valid.ng-valid-required').last();

    that.saisonsNameField = saisonsNameField;
    that.saisonTypField = saisonTypField;
    that.saisonStartdatumField = saisonStartdatumField;
    that.saisonEnddatumField = saisonEnddatumField;
}