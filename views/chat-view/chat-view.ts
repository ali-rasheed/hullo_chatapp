/// <reference path="../../factory/ContactSetup.ts" />
/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
@component("chat-view")
class ChatView extends polymer.Base {

  @property({ notify: true, type: Array })
  transferArray: Array<Contact> = contacts;
  @property({ type: String })
  inputmsg: string;
  @property({ type: String })
  author: string;
  @property({ type: String })
  chatName: string;
  @property({ notify: true })
  msgsSelected: Array<String> = this.transferArray[0].msgs;

  ready() {
    console.log("chat-view is ready" + contacts[0]);

  }

  @observe("chatName")
  changeView(newValue, oldValue) {
    console.log("changeView");
    for (let contact of contacts) {

      if (newValue == contact.contactName) { this.msgsSelected = contact.msgs; }
      console.log(contact.contactName);
    }



    //   case "Mike":     this.msgsSelected = this.msgsMike; break;
    //   case "Molly":     this.msgsSelected = this.msgsMolly;      //     break;
    //   case "Peter":     this.msgsSelected = this.msgsPeter;      //     break;
    //   case "Kevin":this.msgsSelected = this.msgsKevin;      //     break;
    // }
  }


  sendMsg() {

    this.inputmsg
      = document.getElementById("input_val").value;
    var msg = {
      author: 'me',
      msg_val: this.inputmsg

    };

    this.push('msgsSelected', msg);
    console.log(this.msgsSelected);
    document.getElementById('chatUpdate').render;

  }

}

// console.log('chat');

ChatView.register();
