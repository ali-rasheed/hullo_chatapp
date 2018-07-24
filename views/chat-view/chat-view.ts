/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
import { MessageViewModel } from "../../view-model/message-view-model";

@component("chat-view")
class ChatView extends polymer.Base {
  @property({ type: Array, notify: true })
  currMessages: Array<MessageViewModel>;

  @observe("currMessages")
  changeView(newValue, oldValue) {
    console.log("currMessages=> ", this.currMessages);
    // let messageDisplay = this.$$("#chatUpdate") as any;
    // messageDisplay.render;
//  this.$.chatUpdate.render();
//  this.notifyPath("currMessages", this.currMessages);
// var cMsg = this.currMessages;
// this.currMessages= [];
// this.currMessages = cMsg;
  }


  sendMsg(e,detail) {
    let msgInput = Polymer.dom(this.root).querySelector("#msgInput") as any;
    this.fire('sendingMsg', { message: msgInput.value });  
    msgInput.value = "";
  }
}
ChatView.register();
