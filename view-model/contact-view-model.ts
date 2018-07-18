import { MessageViewModel, MessageViewModelFactory } from "./message-view-model";

export class ContactViewModel {
     public name: string;
     public messages: MessageViewModel[];
 
     constructor(name: string, messages: MessageViewModel[]) {
         this.name = name;
         this.messages = messages;
     }
} 

export class ContactViewModelFactory {
     public create(obj: any): ContactViewModel {
         let name = obj.name;
         let messages = [];
         
         obj.messages && obj.messages.forEach(message => {
             messages.push(new MessageViewModelFactory().create(message));
         });
         return new ContactViewModel(name, messages);
     };
 }