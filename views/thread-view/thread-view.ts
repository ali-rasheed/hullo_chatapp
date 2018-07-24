/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { ContactViewModel } from "../../view-model/contact-view-model";

@component("thread-view")
class ThreadView extends polymer.Base {
  @property({ type: String, notify: true })
  selectedName: string;
  @property({ notify: true, type: Array })
  contacts: ContactViewModel[];

  @observe("contacts.*")
  log() {
    this.$.threadUpdate.render();
  }

  showInput() {
    var x = this.$$("#inputCont");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  createCont(e, detail) {
    let inputVal = this.$$("#inputVal") as any;
    this.fire("creatingCont", { name: inputVal.value });
    inputVal.value = "";

  }

  getNames(contacts) {
    return contacts.map(c => c.name);
  }
}
ThreadView.register();
