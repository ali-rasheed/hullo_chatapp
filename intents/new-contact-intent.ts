import { InMemConvoRepository } from "../repo/in-mem-convo-repository";
import { Contact } from "../entities/contact";

export class NewContactIntent{
     add(contact:Contact, obj: InMemConvoRepository){
          obj.add(contact);
     }
}