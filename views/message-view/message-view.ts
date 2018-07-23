/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { Contact } from "../../entities/contact";
import { InMemConvRepo, ConverationRepository } from "../../repo/inmem-convo-repo";
import { NewConversationsRepository } from "../../intents/new-convo-repo";
import { AllConversations } from "../../intents/all-convos";
import { ContactViewModel, ContactViewModelFactory } from "../../view-model/contact-view-model";
import { MessageViewModel, MessageViewModelFactory } from "../../view-model/message-view-model";
import { ContactValidator } from "../../entities/validators/cont-validator";
import { newMessage } from "../../intents/new-msg";
import { NewContact } from "../../intents/new-cont";
import { Message } from "../../entities/Message";
import { MessageValidator } from "../../entities/validators/msg-validator";

@component("message-view")
class MessageView extends polymer.Base {
    public convoRepo;

    @property({ type: String, notify: true })
    currContact: string;

    @property({ notify: true, type: Array })
    conversationViewModel: ContactViewModel[];
    @property({ notify: true, type: Array })
    selectedConversation: ContactViewModel;
    // created(){
    // this.conversationViewModel= new Array<ContactViewModel>();

    // }
    ready() {
        this.convoRepo = new NewConversationsRepository().create();
        this.conversationViewModel = new Array<ContactViewModel>();
        this.createConvViewModel();
        console.log("conversations init", this.conversationViewModel);
        this.currContact = this.conversationViewModel[1].name;
        console.log("current conversation", this.currContact);
        console.log("selectedConversation conversation", this.selectedConversation);
    }

    @listen("sendingMsg")
    addnewMessage(e) {
        // console.log(this.conversationViewModel);
        let obj: any = new Object;

        obj.value = e.detail.message, obj.author = "Me";
        // console.log(this.conversationViewModel);

        let newMsgVModel: MessageViewModel = new MessageViewModelFactory().create(obj);
        // console.log(this.conversationViewModel);
        let newMsg: Message = new MessageValidator().sanitize(newMsgVModel);
        // console.log(this.conversationViewModel);
        let sentMsg = new newMessage().add(this.currContact, newMsg, this.convoRepo);
        // console.log(this.conversationViewModel);
        // console.log(sentMsg);
        let finalVModel = new MessageViewModelFactory().create(sentMsg);
        console.log("added vm", finalVModel);
        // console.log(this.conversationViewModel==undefined);
        // for (let i = 0; i < this.conversationViewModel.length; i++) {
        //     let convo = this.conversationViewModel[i];
        //     console.log(convo.name);
        //     // console.log(this.currContact);
        //     let messages :Array<MessageViewModel> = convo.messages;
        //     if (convo.name == this.currContact) {
        //         this.push("messages", newMsgVModel);
        //         console.log("done");
        //     }
        // }

        this.conversationViewModel.forEach((conversation, index) => {
            if (conversation.name == this.currContact) {
                this.conversationViewModel[index].messages.push(finalVModel);
                this.notifyPath("conversationViewModel", this.conversationViewModel);
            }

        });

        console.log("updated CVM");
        // for(let item of this.conversationViewModel){
        //     if (item.name==this.currContact){
        //         item.messages.push(finalVModel);
        //     }
        // }
        // // render();
        // this.notifyPath("conversationViewModel", this.conversationViewModel);

        // // console.log("AFTER UPDATE", this.conversationViewModel);
        // // this.conversationViewModel.forEach(convo => {
        // //     // let msgs: Array<Message> = convo.messages;
        // //     if (convo.name == this.currContact) {
        // //         this.push("convo.messages", newMsgVModel);
        // //     }
        // // });

    }

    @listen("creatingCont")
    createCont(e) {
        let obj: any = new Object;
        obj.name = e.detail.name;
        let newContVModel: ContactViewModel = new ContactViewModelFactory().create(obj);
        let newCont: Contact = new ContactValidator().sanitize(newContVModel);
        new NewContact().add(newCont, this.convoRepo);
        this.push("conversationViewModel", newContVModel);
        console.log("when creating contact", this.conversationViewModel);
        console.log("updated conversation", this.conversationViewModel);
    }

    @observe("currContact")
    changeView(newValue, oldValue) {
        let ret = this.conversationViewModel.filter(c => c.name == this.currContact)[0];
        this.set("selectedConversation", ret);
    }

    createConvViewModel() {
        let convos: Array<Contact> = this.convoRepo.convos;
        convos.forEach(convoContact => {
            this.push("conversationViewModel", new ContactViewModelFactory().create(convoContact))
        });

    }

    getThreadNames(s) {
        console.log("Get TH NAMe", this.conversationViewModel);
        let c = this.conversationViewModel;
        console.log("Get TH NAMe", c);
        console.log("Get TH NAMe", c.map(s => s.name))

        for (let index = 0; index < this.conversationViewModel.length; index++) {
            console.log("Get TH NsAMe", this.conversationViewModel);
        }
        return c.map(s => s.name);
    }
}

MessageView.register();
