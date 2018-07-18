export class MessageViewModel {
     public author: string;
     public value: string;
 
     constructor(author: string, value: string) {
         this.author = author;
         this.value = value;
     }
 }
 
 export class MessageViewModelFactory {
     public create(obj: any): MessageViewModel {
         return new MessageViewModel(obj.author, obj.value);
     }
 }