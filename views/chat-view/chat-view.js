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
/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
var Contact = /** @class */ (function () {
    function Contact(contactName, message) {
        message = this.msgs;
        contactName = this.contactName;
    }
    return Contact;
}());
var contacts = [new Contact("Mike", []),
    new Contact("Molly", []), new Contact("Peter", []),
    new Contact("Kevin", [])];
var ChatView = /** @class */ (function (_super) {
    __extends(ChatView, _super);
    function ChatView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transferArray = contacts;
        _this.msgsSelected = _this.transferArray[0].msgs;
        return _this;
    }
    // @property({ notify: true })   msgsMike = [{ author: 'Mike', msg_val: "Hi man, how are you?" }, { author: 'me', msg_val: "I'm great" }, { author: 'Mike', msg_val: "What have you been upto?" },];
    // @property({ notify: true })  // msgsMolly = [];
    // @property({ notify: true })  // msgsPeter = [];
    // @property({ notify: true })  // msgsKevin = [];
    ChatView.prototype.ready = function () {
        console.log("chat-view is ready" + contacts[0]);
        // for (let contact of this.transferArray) {
        //   console.log(contact);
        // }
    };
    ChatView.prototype.changeView = function (newValue, oldValue) {
        console.log("changeView");
        for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
            var contact = contacts_1[_i];
            if (newValue == contact.contactName) {
                this.msgsSelected = contact.msgs;
            }
            console.log(contact.contactName);
        }
        //   case "Mike":     this.msgsSelected = this.msgsMike; break;
        //   case "Molly":     this.msgsSelected = this.msgsMolly;      //     break;
        //   case "Peter":     this.msgsSelected = this.msgsPeter;      //     break;
        //   case "Kevin":this.msgsSelected = this.msgsKevin;      //     break;
        // }
    };
    ChatView.prototype.sendMsg = function () {
        this.inputmsg
            = document.getElementById("input_val").value;
        // console.log(input_val);
        var msg = {
            author: 'me',
            msg_val: this.inputmsg
        };
        this.push('msgsSelected', msg);
        console.log(this.msgsSelected);
        document.getElementById('chatUpdate').render;
        // var x = document.getElementsByClassName('name');
        // for (var i = x.length; i-- > 0;)
        //   if (x[i].innerHTML == 'me')
        //     x[i].parentNode.style.position = 'relative';
    };
    __decorate([
        property({ notify: true, type: Array })
    ], ChatView.prototype, "transferArray", void 0);
    __decorate([
        property({ type: String })
    ], ChatView.prototype, "inputmsg", void 0);
    __decorate([
        property({ type: String })
    ], ChatView.prototype, "author", void 0);
    __decorate([
        property({ type: String })
    ], ChatView.prototype, "chatName", void 0);
    __decorate([
        property({ notify: true })
    ], ChatView.prototype, "msgsSelected", void 0);
    __decorate([
        observe("chatName")
    ], ChatView.prototype, "changeView", null);
    ChatView = __decorate([
        component("chat-view")
    ], ChatView);
    return ChatView;
}(polymer.Base));
// console.log('chat');
ChatView.register();
//# sourceMappingURL=chat-view.js.map