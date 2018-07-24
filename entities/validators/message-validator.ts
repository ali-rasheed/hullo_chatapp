import { MessageViewModel } from "../../view-model/message-view-model";
import { Message, MessageFactory } from "../Message";

export class MessageValidator {
    sanitize(obj: MessageViewModel): Message {
        if(obj.value!= "") {
            return new MessageFactory().create(obj);
        } 
        
        throw "Please enter a valid name";
    }
}