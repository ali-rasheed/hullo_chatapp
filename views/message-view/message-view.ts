/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { Contact } from "../../entities/contact";
import { InMemConvRepo } from "../../repo/inmem-convo-repo";
import { NewConversationsRepository } from "../../intents/newConvoRepo";
import { GetAllConversations } from "../../intents/getAllConvos";
import { GetAllNames } from "../../intents/getAllNames";

@component("message-view")
class MessageView extends polymer.Base {
     public convoRepo;

     @property({ type: String, notify: true })
     nameTitle: string;
     @property({ notify: true, type: Array })
     conversationViewModel;
     @property({ type: Array, notify: true })
     threadNames;
     ready() {

          let convoRepo = new NewConversationsRepository().main();

          this.conversationViewModel = new GetAllConversations().main(convoRepo);

          this.threadNames = new GetAllNames().main(convoRepo);
          
     }

     @observe("threadNames")
     changeView(newValue, oldValue){


}}
MessageView.register();
