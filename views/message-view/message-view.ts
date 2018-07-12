/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

@component("message-view")
class MessageView extends polymer.Base{

@property({type: String, notify: true})
nameTitle: string;
}
console.log('message');

// @(property)()x
// after the element is defined, we register it in Polymer
MessageView.register();
