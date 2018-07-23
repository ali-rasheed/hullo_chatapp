/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { Contact } from "../../entities/contact";
import { InMemConvRepo, ConverationRepository } from "../../repo/inmem-convo-repo";

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
    public contactsRepo: InMemConvRepo;

    @property({ type: String, notify: true })
    currContact: string;
    @property({ notify: true, type: Array })
    contactsVM: ContactViewModel[];
    @property({ notify: true, type: String })
    selectedName: string
    @property({ notify: true, type: Array })
    selectedContact: ContactViewModel;

    @observe("selectedName")
    updateSelectedContact() {
        this.selectedContact = this.contactsVM.filter(c => c.name == this.selectedName)[0];
    }


    ready() {
        this.contactsRepo = new InMemConvRepo();
        this.contactsVM = [];
        this.createConvViewModel();
        this.set("selectedContact", this.contactsVM[0]);
        console.log("init contactsVM => ", this.contactsVM);
        console.log("selected Conversation", this.selectedContact);
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
        let sentMsg = new newMessage().add(this.currContact, newMsg, this.contactsRepo);
        // console.log(this.conversationViewModel);
        // console.log(sentMsg);
        let finalVModel = new MessageViewModelFactory().create(sentMsg);
        console.log("added vm", finalVModel);


        this.contactsVM.forEach((conversation, index) => {
            if (conversation.name == this.currContact) {
                this.contactsVM[index].messages.push(finalVModel);
                this.notifyPath("contactsVM", this.contactsVM);
            }

        });

        console.log("updated CVM", this.contactsVM);
    }

    @listen("creatingCont")
    createCont(e) {
        let obj: any = new Object;
        obj.name = e.detail.name;
        let newContVModel: ContactViewModel = new ContactViewModelFactory().create(obj);
        let newCont: Contact = new ContactValidator().sanitize(newContVModel);
        new NewContact().add(newCont, this.contactsRepo);
        console.log("new contact",newContVModel);
        console.log("contactsVM before", this.contactsVM)
        this.push("contactsVM", newContVModel);
        console.log("contactsVM after", this.contactsVM)
        this.notifyPath("contactsVm", this.contactsVM);
    }

    createConvViewModel() {
        let convos: Array<Contact> = this.contactsRepo.convos;
        convos.forEach(convoContact => {
            this.push("contactsVM", new ContactViewModelFactory().create(convoContact))
        });
    }
}

MessageView.register();
