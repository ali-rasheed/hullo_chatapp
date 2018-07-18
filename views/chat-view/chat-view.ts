/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
// import { Contact } from "../../entities/Contact";
import { InMemConvRepo } from "../../repo/inmem-convo-repo";
import { MessageFactory, Message } from "../../entities/Message";
import { Contacts } from "../../data/contData"

@component("chat-view")
class ChatView extends polymer.Base {

  // @property({ type: String })
  // inputVal: string;
  @property({ type: String })
  currContact: string;
  @property({ type: Array })
  chatArr;
 @property({type: Array}) 
 currMessages: Array<Message>;

  ready() {
    console.log("chat-view is ready");
this.currMessages = this.chatArr[0].messages 
 }

  @observe("currContact")
  changeView(newValue, oldValue) {
    console.log("changeView");
    for (let contact of this.chatArr) {
      if (newValue == contact.name) { this.currMessages = contact.messages; }
      console.log(contact.name);
    }
  }


  sendMsg() {
    let inputVal =(<HTMLInputElement>document.getElementById("inputVal")).value;
    console.log(inputVal);
    let msgObj: any = new Object;
   msgObj.author = "me";
   msgObj.value = inputVal;
    let actualMsg: Message = new MessageFactory().create( msgObj);
    console.log(actualMsg);

    // document.getElementById('chatUpdate').render;

  }
}
ChatView.register();
