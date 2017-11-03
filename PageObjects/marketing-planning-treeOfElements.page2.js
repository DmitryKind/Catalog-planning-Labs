module.exports = MarketingTreeOfElements;

function MarketingTreeOfElements() {
    var that = this;

    var unit40HerbstWinter = element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016')),
        unitProspekt = element(by.cssContainingText('.aciTreeText', 'Prospekt')),
        unit6556Schwarzpreis = element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017')),
        saisons34 = element(by.cssContainingText('.ng-binding', 'Herbst/Winter 2012/2013')),
        vorteileVr2 = element(by.cssContainingText('.ng-binding', 'VR_2')),
        newName = element.all(by.repeater('item in items')).first(),
        vorteileTestCreate = element(by.cssContainingText('.ng-binding', 'Test_create')),
        vorteileTestEdit = element.all(by.repeater('item in items')).first(),
        newPublication = element(by.cssContainingText('.aciTreeText', newNumber + ' Schwarzpreis ET: 05.05.2017')),
        unit39Sommer = element.all(by.cssContainingText('.aciTreeText', '39, Frühling/Sommer 2015')).last(),
        unitInszenierungspunkt = element.all(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt')).last(),
        unit3911Schwarzpreis = element(by.cssContainingText('.aciTreeText', '3911 Schwarzpreis ET: 04.03.2016'));

    that.unit40HerbstWinter = unit40HerbstWinter;
    that.unitProspekt = unitProspekt;
    that.unit6556Schwarzpreis = unit6556Schwarzpreis;
    that.saisons34 = saisons34;
    that.vorteileVr2 = vorteileVr2;
    that.newName = newName;
    that.vorteileTestCreate = vorteileTestCreate;
    that.vorteileTestEdit = vorteileTestEdit;
    that.newPublication = newPublication;
    that.unit39Sommer = unit39Sommer;
    that.unitInszenierungspunkt = unitInszenierungspunkt;
    that.unit3911Schwarzpreis = unit3911Schwarzpreis;

    that.treeElementsClick = function (treeElement1, treeElement2, treeElement3) {
        var EC = protractor.ExpectedConditions;
        return browser.actions().doubleClick(treeElement1).perform()
            .then(function () {
                return browser.wait(EC.visibilityOf(treeElement2));
            })
            .then(function () {
                return browser.actions().doubleClick(treeElement2).perform();
            })
            .then(function () {
                browser.wait(EC.visibilityOf(treeElement3));
            })
            .then(function () {
                browser.actions().doubleClick(treeElement3).perform();
            })
    };
}
