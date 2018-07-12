/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ThreadView = /** @class */ (function (_super) {
    __extends(ThreadView, _super);
    function ThreadView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threadNames = [];
        return _this;
    }
    // test() {
    //   console.log(document.getElementById("paper_LB").name);
    //   console.log(this.nameProjected);
    // }
    ThreadView.prototype.newInput = function () {
        console.log("abc");
        var x = this.$$("#newCntctInpt");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    };
    __decorate([
        property({ type: String, notify: true })
    ], ThreadView.prototype, "nameProjected", void 0);
    __decorate([
        property({ notify: true })
    ], ThreadView.prototype, "threadNames", void 0);
    ThreadView = __decorate([
        component("thread-view")
    ], ThreadView);
    return ThreadView;
}(polymer.Base));
console.log('thread');
// after the element is defined, we register it in Polymer
ThreadView.register();
//# sourceMappingURL=thread-view.js.map