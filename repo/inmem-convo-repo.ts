import { Contact, ContactFactory } from "../entities/contact";
import { Message, MessageFactory } from "../entities/Message";
import { Contacts } from "../data/contData"

interface ConverationRepository {
    add(contact: Contact);
    addMessage(name: string, message: Message);
}

export class InMemConvRepo implements ConverationRepository {
    inMemConvo: Array<Contact>;

    constructor() {
        this.inMemConvo = [];
        this.seedDb();
    }

    add(contact: Contact) {
        this.inMemConvo.push(contact);
    };

    addMessage(name: string, message: Message) {
        for (let contact of this.inMemConvo) {
            if (contact.name = name) {
                contact.messages.push(message);
            }
        }
    };
    getNames(): Array<string> {
        let nameArr: Array<string> = [];
        for (let convo of this.inMemConvo) {
            nameArr.push(convo.name);
        }
        return nameArr;
    }
    seedDb() {
        let jsonConvos = Contacts;
        let contactFactory = new ContactFactory();

        jsonConvos.contacts.forEach(contact => {
            this.inMemConvo.push(contactFactory.create(contact))
        });
    }
}