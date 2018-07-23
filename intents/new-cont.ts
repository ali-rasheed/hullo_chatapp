import { InMemConvRepo } from "../repo/inmem-convo-repo";
import { Contact } from "../entities/contact";

export class NewContact{
     add(contact:Contact, obj: InMemConvRepo){
          obj.add(contact);
     }
}