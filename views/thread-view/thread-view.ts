/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

@component("thread-view")
class ThreadView extends polymer.Base {

  @property({ type: String, notify: true })
  nameProjected: string;
  @property({ notify: true , type: Array})
  threadNames;
  // @property({ notify: true })
  // threadNames;
  
  // test() {
  //   console.log(document.getElementById("paper_LB").name);
  //   console.log(this.nameProjected);
  // }


  newInput() {
    console.log("abc");
    var x = this.$$("#newCntctInpt");
    if (x.style.display === "block") {

      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}

console.log('thread');
// after the element is defined, we register it in Polymer
ThreadView.register();
