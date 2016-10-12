//Model for Blog Entry
"use strict";
var BlogEntry = (function () {
    function BlogEntry(id, title, date, body, short, imgUrl) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.body = body;
        this.short = short;
        this.imgUrl = imgUrl;
    }
    return BlogEntry;
}());
exports.BlogEntry = BlogEntry;
//# sourceMappingURL=blogEntry.js.map