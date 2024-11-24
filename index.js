"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
var InfoJobs = /** @class */ (function () {
    function InfoJobs(dom, url, selector) {
        this.originalDom = "";
        this.url = "";
        this.selector = "";
        this.originalDom = dom.serialize();
        this.url = url;
        this.selector = selector;
    }
    InfoJobs.prototype.getOriginalDom = function () {
        return this.originalDom;
    };
    return InfoJobs;
}());
var url = "https://formacion.infojobs.net/";
var selector = "div.home-search-results-items";
jsdom_1.JSDOM.fromURL(url)
    .then(function (dom) {
    var infoJobs = new InfoJobs(dom, url, selector);
    return infoJobs;
})
    .then(function (infoJobs) {
    console.log(infoJobs.getOriginalDom());
})
    .catch(function (error) {
    console.error(error);
});
