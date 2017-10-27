module.exports = MarketingTreeOfElements;

function MarketingTreeOfElements () {
    var that = this;
    var unit40HerbstWinter = element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016')),
        unitProspekt = element(by.cssContainingText('.aciTreeText', 'Prospekt')),
        unit6556Schwarzpreis = element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017')),
        saisons34 = element(by.cssContainingText('.ng-binding', 'Herbst/Winter 2012/2013'));

    that.unit40HerbstWinter = unit40HerbstWinter;
    that.unitProspekt = unitProspekt;
    that.unit6556Schwarzpreis = unit6556Schwarzpreis;
    that.saisons34 = saisons34;

    that.treeElementsClick = function () {
        browser.actions().doubleClick(unit40HerbstWinter).perform();
        browser.sleep(1000);
        browser.actions().doubleClick(unitProspekt).perform();
        browser.sleep(1000);
        browser.actions().doubleClick(unit6556Schwarzpreis).perform();
    }

 }