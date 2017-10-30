module.exports = MarketingPlanningMenu;

function MarketingPlanningMenu() {
    var that = this;
    var menuPublikationspflege = element(by.css('a[href="/productionsEditor"]')),
        publikationspflegeForm = element(by.cssContainingText('.ng-binding', 'Publikationspflege')),
        publikationspflegeFormText = element(by.className('ng-binding')),
        menuStammdaten = element(by.cssContainingText('.ng-binding', 'STAMMDATEN')),
        saisons = element(by.css('a[href="/saisonsVerwaltung"]')),
        saisonsForm = element(by.cssContainingText('.ng-binding', 'Saisons')),
        saisonsFormText = element(by.className('ng-binding')),
        vorteile = element(by.css('a[href="/Vorteile"]')),
        vorteileFormText = element(by.id('header'));

    that.menuPublikationspflege = menuPublikationspflege;
    that.publikationspflegeForm = publikationspflegeForm;
    that.publikationspflegeFormText = publikationspflegeFormText;
    that.menuStammdaten = menuStammdaten;
    that.saisons = saisons;
    that.saisonsForm = saisonsForm;
    that.saisonsFormText = saisonsFormText;
    that.vorteile = vorteile;
    that.vorteileFormText = vorteileFormText;
}
