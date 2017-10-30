module.exports = MarketingTreeOfElements;

function MarketingTreeOfElements () {
    var that = this;
    var unit40HerbstWinter = element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016')),
        unitProspekt = element(by.cssContainingText('.aciTreeText', 'Prospekt')),
        unit6556Schwarzpreis = element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017')),
        saisons34 = element(by.cssContainingText('.ng-binding', 'Herbst/Winter 2012/2013')),
        vorteileVr2 = element(by.cssContainingText('.ng-binding', 'VR_2')),
        newName = element.all(by.repeater('item in items')).first(),
        vorteileTestCreate = element(by.cssContainingText('.ng-binding', 'Test_create')),
        vorteileTestEdit = element.all(by.repeater('item in items')).first();

    that.unit40HerbstWinter = unit40HerbstWinter;
    that.unitProspekt = unitProspekt;
    that.unit6556Schwarzpreis = unit6556Schwarzpreis;
    that.saisons34 = saisons34;
    that.vorteileVr2 = vorteileVr2;
    that.newName = newName;
    that.vorteileTestCreate = vorteileTestCreate;
    that.vorteileTestEdit = vorteileTestEdit;

    that.treeElementsClick = function () {
        var EC = protractor.ExpectedConditions;
        browser.actions().doubleClick(unit40HerbstWinter).perform();
        browser.wait(EC.visibilityOf(unitProspekt));
        browser.actions().doubleClick(unitProspekt).perform();
        browser.wait(EC.visibilityOf(unit6556Schwarzpreis));
        browser.actions().doubleClick(unit6556Schwarzpreis).perform();
    }
 }