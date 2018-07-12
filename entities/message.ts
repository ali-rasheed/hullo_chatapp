export class Message {
    public author: string;
    public value: string;

    constructor(author: string, value: string) {
        this.author = author;
        this.value = value;
    }
}

export class MessageFactory{
    public create(obj : any): Message{
        let author = obj.author;
        let value = obj.value;
        return new Message(author, value);
    }
}