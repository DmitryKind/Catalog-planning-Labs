module.exports = MarketingPlanningMenu;

function MarketingPlanningMenu() {
    var that = this;

    var headMenu = '.text-justify',
        menuEinkauf = element(by.cssContainingText(headMenu, 'EINKAUF')),
        menuStammdaten = element(by.cssContainingText(headMenu, 'STAMMDATEN'));

    var menuInsideHeadMenu = '.list-group-item',
        publikationspflegePunkt = element(by.cssContainingText(menuInsideHeadMenu, 'Publikationspflege')),
        saisonsPunkt = element(by.cssContainingText(menuInsideHeadMenu, 'Saisons')),
        vorteilePunkt = element(by.cssContainingText(menuInsideHeadMenu, 'Vorteile')),
        seitenplanungPunkt = element(by.cssContainingText(menuInsideHeadMenu, 'Seitenplanung')),
        artikelzuordnungPunkt = element(by.cssContainingText(menuInsideHeadMenu, 'Artikelzuordnung'));

    var formText = element(by.id('header'));

    that.publikationspflegePunkt = publikationspflegePunkt;
    that.menuStammdaten = menuStammdaten;
    that.menuEinkauf = menuEinkauf;
    that.saisonsPunkt = saisonsPunkt;
    that.vorteilePunkt = vorteilePunkt;
    that.seitenplanungPunkt = seitenplanungPunkt;
    that.artikelzuordnungPunkt = artikelzuordnungPunkt;
    that.formText = formText;

    that.clickMenu = function (menu, punktMenu) {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(menu))
            .then(function () {
                return menu.click();
            })
            .then(function () {
                return browser.wait(EC.visibilityOf(punktMenu));
            })
            .then(function () {
                return punktMenu.click();
            })
    };
}
