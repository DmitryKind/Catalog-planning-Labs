module.exports = MarketingPlanningMenu;

function MarketingPlanningMenu() {
    var that = this;
    var menuPublikationspflege = element(by.css('a[href="/productionsEditor"]')),
        publikationspflegeForm = element(by.cssContainingText('.ng-binding', 'Publikationspflege')),
        publikationspflegeFormText = element(by.className('ng-binding'));

    that.menuPublikationspflege = menuPublikationspflege;
    that.publikationspflegeForm = publikationspflegeForm;
    that.publikationspflegeFormText = publikationspflegeFormText;
}
