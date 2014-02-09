/* global describe, it */
(function () {
    'use strict';
    describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
});
})();