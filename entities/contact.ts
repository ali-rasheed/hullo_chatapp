import { Message, MessageFactory } from "./message";

export class Contact {
    public name: string;
    public messages: Message[];
    constructor(name: string, messages?: Message[]) {
        this.name = name;
        this.messages = messages || [];
    }
}

export class ContactFactory {
    public create(obj: any): Contact {
        let name = obj.name;
        let messages = [];
        obj.messages && obj.messages.forEach(message => {
            messages.push(new MessageFactory().create(message));
        });
        return new Contact(name, messages);
    };
}