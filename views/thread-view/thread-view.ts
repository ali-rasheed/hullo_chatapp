/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

@component("thread-view")
class ThreadView extends polymer.Base {
  @property({ type: String, notify: true })
  nameSelected: string;

  @property({ notify: true, type: Array })
  threadNames: string[]

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
}
ThreadView.register();
