/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
// import { Contact } from "../../entities/Contact";
import { InMemConvRepo } from "../../repo/inmem-convo-repo";
import { MessageFactory, Message } from "../../entities/Message";
import { MessageViewModel } from "../../view-model/message-view-model";

@component("chat-view")
class ChatView extends polymer.Base {
  @property({ type: Array, notify: true })
  currMessages: Array<MessageViewModel>;

  @observe("currMessages")
  changeView(newValue, oldValue) {
    console.log("currMessages=> ", this.currMessages);
  }


  sendMsg(e,detail) {
    let msgInput = Polymer.dom(this.root).querySelector("#msgInput") as any;
    this.fire('sendingMsg', { message: msgInput.value });  
    msgInput.value = "";
  }
}
ChatView.register();
