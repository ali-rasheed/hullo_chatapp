/// <reference path= "../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { Contact } from "../../entities/contact";
import { InMemConvoRepository } from "../../repo/in-mem-convo-repository";

import { ContactViewModel, ContactViewModelFactory } from "../../view-model/contact-view-model";
import { MessageViewModel, MessageViewModelFactory } from "../../view-model/message-view-model";
import { ContactValidator } from "../../entities/validators/contact-validator";
import { newMessageIntent } from "../../intents/new-message-intent";
import { NewContactIntent } from "../../intents/new-contact-intent";
import { Message } from "../../entities/Message";
import { MessageValidator } from "../../entities/validators/message-validator";

@component("message-view")
class MessageView extends polymer.Base {
    public contactsRepo: InMemConvoRepository;

    // @property({ type: String, notify: true })
    // currContact: string;
    @property({ notify: true, type: Array })
    contactsVM: ContactViewModel[];
    @property({ notify: true, type: String })
    selectedName: string;
    @property({ notify: true, type: Array })
    selectedContact: ContactViewModel;

    @observe("selectedName")
    updateSelectedContact() {
        this.selectedContact = this.contactsVM.filter(c => c.name == this.selectedName)[0];
    }

    ready() {
        this.contactsRepo = new InMemConvoRepository();
        this.contactsVM = [];
        this.createConvViewModel();
        this.set("selectedContact", this.contactsVM[0]);
        // console.log("init contactsVM => ", this.contactsVM);
        // console.log("selected Conversation", this.selectedContact);
    }

    @listen("sendingMsg")
    addnewMessage(e) {
        let obj: any = new Object;

        obj.value = e.detail.message, obj.author = "Me";

        let newMsgVModel: MessageViewModel = new MessageViewModelFactory().create(obj);
        let newMsg: Message = new MessageValidator().sanitize(newMsgVModel);
        let sentMsg = new newMessageIntent().add(this.selectedName, newMsg, this.contactsRepo);
        let finalVModel = new MessageViewModelFactory().create(sentMsg);
        console.log("added vm", finalVModel);

        this.contactsVM.forEach((conversation, index) => {

            console.log("current array name: ", conversation.name);
            console.log("current selected name: ", this.selectedContact.name);
            // var that = this;
            if (conversation.name == this.selectedContact.name) {
                this.contactsVM[index].messages.push(finalVModel);
                // this.push( "contactsVM[index].messages", this.contactsVM[index].messages);
                this.notifyPath("contactsVM["+index+"].messages", this.contactsVM[index].messages); 

                // this.notifyPath("contactsVM["+index+"].messages", this.contactsVM[index].messages); 
                this.selectedContact = this.contactsVM.filter(c => c.name == this.selectedName)[0];

                // this.notifyPath("contactsVM[index].messages", ); 
                // this.notifyPath("contactsVM[index].messages", );
                // var arr = this.contactsVM[index].messages;
                // this.contactsVM[index].messages= [];
                // this.set("contactsVM[index].messages",  arr);
                console.log("done");
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
        new NewContactIntent().add(newCont, this.contactsRepo);
        console.log("new contact", newContVModel);
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
